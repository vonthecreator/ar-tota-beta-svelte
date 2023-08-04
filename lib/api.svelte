<!-- api.svelte -->
<script lang="ts">
  import { request, type Variables } from "graphql-request";
  import BigNumber from "bignumber.js";

  // Augment Window interface to include ethereum property
  interface Window {
    ethereum?: any;
  }

  // Define the type for the Tx object
  interface Tx {
    from: string;
    to: string;
    blockHeight?: BigNumber;
    amount: BigNumber;
    pending: boolean;
    confirmed: boolean;
  }

  // Define the type for the Tag object
  interface Tag {
    name: string;
    value: string;
  }

  // Define the GraphQL response data structure
  interface GraphQLResponse {
    transactions: {
      edges: {
        node: Transaction;
      }[];
    };
  }

  // Define the Transaction interface based on your actual data structure
  interface Transaction {
    id: string;
    owner: {
      address: string;
    };
    data: {
      size: number;
    };
    tags: Tag[];
  }

  // Define the getSong function
  export const getSong = async (gateway: string, txid: string) => {
    try {
      const query = `
        query GetTransaction($ids: [ID!]!, $contentType: [String!]!) {
          transactions(ids: $ids, tags: [{ name: "Content-Type", values: $contentType }]) {
            edges {
              node {
                id
                owner {
                  address
                }
                data {
                  size
                }
                tags {
                  name
                  value
                }
              }
            }
          }
        }
      `;
      const variables: Variables = { txid }; // Declare the 'txid' variable here

      const res = await request<GraphQLResponse>(`${gateway}/graphql`, query, variables);

      const data = res.transactions.edges
        .filter((edge) => edge.node.tags.find((x) => x.name === "Title"))
        .map((edge) => setTrackInfo(edge.node, gateway));

      console.log(data);

      return data;
    } catch (error: any) {
      console.error(error);
      throw new Error("Error occurred while fetching data: " + error.message);
    }
  }


      const variables = {
        ids: [txid],
        contentType: ["audio/mpeg", "audio/wav", "audio/aac"],
      };

      const res = await request(`${gateway}/graphql`, query, variables);

      const data = res.transactions.edges
        .filter((edge: any) => edge.node.tags.find((x: any) => x.name === "Title"))
        .map((edge: any) => setTrackInfo(edge.node, gateway));

      console.log(data);

      return data;
    } catch (error: any) {
      console.error(error);
      throw new Error("Error occurred while fetching data: " + error.message);
    }
  };

  // Define the setTrackInfo function
  const setTrackInfo = (node: Transaction, gateway: string) => {
    const title = node.tags.find((x: any) => x.name === "Title")?.value;

    let hasLicense = false;

    const licenseTx = node.tags.find((x: any) => x.name === "License")?.value;
    const access = node.tags.find((x: any) => x.name === "Access")?.value;
    const accessFee = node.tags.find((x: any) => x.name === "Access-Fee")?.value;

    if (licenseTx === "yRj4a5KMctX_uOmKWCFJIjmY8DeJcusVk6-HzLiM_t8" && access === "Restricted") {
      hasLicense = true;
    }

    let creator: string;

    try {
      // find owner from balances
      const initStateTag = node.tags.find((x: any) => x.name === "Init-State")?.value;

      const initState = initStateTag ? JSON.parse(initStateTag) : undefined;

      const assetOwner = Object.keys(initState.balances)[0];

      creator = assetOwner;
    } catch (error) {
      creator = node.owner.address;
    }

    let artworkSrc = "";

    const hasArtwork = !!node.tags.find((x: any) => x.name === "Cover-Artwork")?.value;

    if (hasArtwork) {
      artworkSrc = gateway + "/" + node.tags.find((x: any) => x.name === "Cover-Artwork")?.value;
    }

    const src = gateway + "/" + node.id;
    const txid = node.id;

    return {
      title,
      creator,
      artworkSrc,
      src,
      hasLicense,
      txid,
      accessFee,
    };
  };

  // Define the getLicenseInfo function
  export const getLicenseInfo = async (txid: string, gateway = "https://arweave.net") => {
    try {
      const query = `
        query GetTransaction($ids: [ID!]!) {
          transactions(ids: $ids) {
            edges {
              node {
                id
                tags {
                  name
                  value
                }
              }
            }
          }
        }
      `;

      const variables = {
        ids: [txid],
      };

      const res = await request(`${gateway}/graphql`, query, variables);

      const data = res.transactions.edges.map((edge: any) => setLicenseInfo(edge.node, gateway));

      return data[0];
    } catch (error: any) {
      console.error(error);
      throw new Error("Error occurred while fetching data: " + error.message);
    }
  };

  // Define the setLicenseInfo function
  const setLicenseInfo = (node: Transaction, gateway: string) => {
    let hasLicense = false;

    const licenseTx = node.tags.find((x: any) => x.name === "License")?.value;
    const access = node.tags.find((x: any) => x.name === "Access")?.value;
    const accessFeeTag = node.tags.find((x: any) => x.name === "Access-Fee")?.value.split("One-Time-")[1];

    const accessFee = accessFeeTag ? Number(accessFeeTag) : undefined;

    if (licenseTx === "yRj4a5KMctX_uOmKWCFJIjmY8DeJcusVk6-HzLiM_t8" && access === "Restricted") {
      hasLicense = true;
    }

    console.log("hasLicense", hasLicense);
    return {
      hasLicense,
      accessFee,
    };
  };
</script>
