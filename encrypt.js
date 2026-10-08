const encryptionKey = "Password123";
const encryptedContent = await client.cipher.encrypt("This is a sample text message", encryptionKey);

await client.messages.postSend({
	content: encryptedContent,
	from: '+18005550199',
	encrypted: true,
	to: '+18005550100',
})
.then((message) => {
	console.log(message.id);
})
.catch((err) => {
	console.error(err);
});
