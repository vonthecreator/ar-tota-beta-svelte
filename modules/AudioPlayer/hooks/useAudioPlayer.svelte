<script>
  import { Tracklist } from "@/types";
  import { onMount, onDestroy, setContext, getContext, tick } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let tracklist;
  let audioRef;
  let audioCtxRef;
  let duration;
  let currentTime = 0;
  let playing = false;
  let sourceRef;
  let gainRef;
  let scrubbedValue;
  let scrubbing;
  let ready = false;
  let currentTrackIndex = 0;

  const dispatch = createEventDispatcher();

  /* ACTION HANDLERS */

  const handlePrevTrack = () => {
    setCurrentTrackIndex(
      currentTrackIndex === 0 ? tracklist.length - 1 : currentTrackIndex - 1
    );
    setCurrentTime(0);
    audioRef?.load();
    audioRef?.play();
    setPlaying(true);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex(
      currentTrackIndex === tracklist.length - 1 ? 0 : currentTrackIndex + 1
    );
    setCurrentTime(0);
    audioRef?.load();
    audioRef?.play();
    setPlaying(true);
  };

  /* SIDE EFFECTS */

  onMount(() => {
    // set audio context
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    if (!audioCtxRef) {
      audioCtxRef = new AudioContext();
    }

    // set gain node
    if (!gainRef) {
      gainRef = audioCtxRef.createGain();
    }

    // set media element source
    if (!sourceRef) {
      sourceRef = audioCtxRef.createMediaElementSource(audioRef);
      sourceRef.connect(gainRef).connect(audioCtxRef.destination);
    }

    if (audioRef) {
      // allow audio to be played from gateways
      audioRef.crossOrigin = "anonymous";
    }
  });

  const handlePlayPause = () => {
    if (!audioRef || !audioCtxRef) return;

    if (audioCtxRef.state === "suspended") {
      audioCtxRef.resume();
    }

    if (playing) {
      audioRef.pause();
      setPlaying(false);
    }

    if (!playing && audioRef.readyState >= 2) {
      audioRef.play();
      setPlaying(true);
    }
  };

  // set duration
  tick(() => {
    if (!audioRef) return;

    const seconds = Math.floor(audioRef.duration || 0);
    duration = seconds;
    const current = Math.floor(audioRef.currentTime || 0);
    currentTime = current;

    ready = audioRef.readyState > 2;
  });

  // listeners
  onMount(() => {
    if (audioRef) {
      // if audio has ended
      audioRef.addEventListener("ended", handleEnded);
      audioRef.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (audioRef) {
        audioRef.removeEventListener("ended", handleEnded);
        audioRef.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  });

  const handleEnded = () => {
    setPlaying(false);
  };

  const handleTimeUpdate = () => {
    // check for current runs in useffect
    currentTime = audioRef?.currentTime;
  };

  onDestroy(() => {
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }
  });

  setContext("audioPlayer", {
    audioRef,
    gainRef,
    audioCtxRef,
    handlePlayPause,
    setCurrentTime,
    handlePrevTrack,
    handleNextTrack,
  });

  // Optionally you can dispatch an event with the audioPlayer context
  dispatch("audioPlayerContextReady", getContext("audioPlayer"));
</script>
