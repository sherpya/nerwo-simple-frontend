import { runTypeChain } from 'typechain';

async function main() {
    const cwd = process.cwd();
    const artifactsDir = `${cwd}/../nerwo-contracts/artifacts/contracts`;
    const inputFiles = [
        `${artifactsDir}/NerwoEscrow.sol/NerwoEscrow.json`,
        `${artifactsDir}/NerwoCentralizedArbitrator.sol/NerwoCentralizedArbitrator.json`,
    ];

    await runTypeChain({
        cwd,
        filesToProcess: inputFiles,
        allFiles: inputFiles,
        outDir: `${cwd}/gen/types`,
        target: 'ethers-v5',
    });
}

main().catch(console.error);
