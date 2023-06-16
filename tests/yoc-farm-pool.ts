import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { YocFarmPool } from "../target/types/yoc_farm_pool";

describe("yoc-farm-pool", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.YocFarmPool as Program<YocFarmPool>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
