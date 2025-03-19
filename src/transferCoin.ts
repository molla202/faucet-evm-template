import wallet from "./wallet";
import { ethers } from "ethers";

type TransferCoin = {
  success: boolean;
  message: string;
};

export default async function transferCoin(address: string): Promise<TransferCoin> {
  try {
    const value = ethers.utils.parseUnits(process.env.VALUE, "ether");
    const transaction = await wallet.sendTransaction({
      to: address,
      value: value.toHexString(), // Hexadecimal string olarak gönder
    });
    return {
      success: true,
      message: transaction.hash,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Unable to Send Transaction",
    };
  }
}
