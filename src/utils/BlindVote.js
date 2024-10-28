import forge from 'node-forge';
import { sendBlindedVote } from '../apis/Vote.Service';

export async function blindTheVote(vote) {
  const publicKeyPem = localStorage.getItem('publicKey');
  const publicKey = forge.pki.publicKeyFromPem(publicKeyPem);

  const md = forge.md.sha256.create();
  md.update(vote, 'utf8');
  const messageInt = new forge.jsbn.BigInteger(md.digest().toHex(), 16);
  //   console.log('Message:', messageInt.toString(16));

  const r = new forge.jsbn.BigInteger(
    forge.util.bytesToHex(forge.random.getBytesSync(32)),
    16
  );
  const rInverse = r.modInverse(
    new forge.jsbn.BigInteger(publicKey.n.toString(16), 16)
  );

  const blindedMessage = messageInt
    .multiply(r.modPow(publicKey.e, publicKey.n))
    .mod(publicKey.n);

  const response = await sendBlindedVote(blindedMessage.toString(16));

  //   console.log('Blinded vote sent:', response.signature);

  const blindSignature = new forge.jsbn.BigInteger(response.signature, 16);

  const unblindedSignature = blindSignature.multiply(rInverse).mod(publicKey.n);

  //   console.log('Unblinded signature:', unblindedSignature.toString(16));

  const isValid = unblindedSignature.equals(messageInt);

  //   console.log('Signature is valid:', isValid);
  // return isValid;

  const blindedVote = { isValid: true, signature: response.signature };
  return blindedVote;
}
