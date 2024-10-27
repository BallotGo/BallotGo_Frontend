const blindSignatures = require('blind-signatures');
const NodeRSA = require('node-rsa');

export async function blindTheVote(vote) {
    const voteHash = blindSignatures.messageToHash(vote);

    const publicKey = localStorage.getItem('publicKey');

    const publicKeyObj = new NodeRSA(publicKey);

    const { blinded, r } = blindSignatures.blind({
        message: voteHash,
        N: publicKeyObj.keyPair.n.toString(),
        E: publicKeyObj.keyPair.e.toString(),
    });

    localStorage.setItem('blindedVote', blinded);
    localStorage.setItem('r', r);

    return blinded;
}