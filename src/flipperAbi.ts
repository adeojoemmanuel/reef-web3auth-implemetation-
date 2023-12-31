export const FlipperAbi = [
  {
    type: "constructor",
    inputs: [{ name: "initvalue", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    name: "flip",
    type: "function",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "get",
    type: "function",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
];
