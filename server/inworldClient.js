const { InworldClient } = require('@inworld/core');

class InworldClientWrapper {
  constructor() {
    this.client = new InworldClient();
    this.client.setApiKey({
  
    key: 't3hIk1GR6ruRVHqccmCUxzhduCT1ZOOf',
    secret:'1ZUDPp2cWxg31FmVB1AnWSqTsWecbhX13sqCyhzTocHw9nF2sMRMRmCkbjWoz5S5',
})
  // Setup a user name.
  // It allows character to call you by name.
  this.client.setUser({ fullName: 'Your name' });

this.client.setConfiguration({ capabilities: { audio: false, emotions: true } });
this.client.setScene('workspaces/default-w5pin-cntlbebptkhe0fwa/scenes/the_caterpillars_mushroom');
this.client.setOnError((err) => console.error(err));
}

async sendText(text) {
await this.client.sendText(text);
}

setOnMessage(onMessage) {
this.client.setOnPacket((packet) => {
  if (packet.type === 'chat') {
    const text = packet.payload.text;
    onMessage({ sender: 'character', text });
  }
});
}

close() {
this.client.close();
}
}

module.exports = InworldClientWrapper;