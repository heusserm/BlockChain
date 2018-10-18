class Block {
  constructor(timestamp, lastHash, hash, data) {
     this.timestamp = timestamp;
     this.lasthash = lastHash;
     this.hash = hash;
     this.data = data;
  }

  toString() {
    return `Block - 
      Timestamp: ${this.timestamp}
      Last Hash: ${this.lastHash}
      Hash     : ${this.hash}
      Data       ${this.data}`;
  }

  static genesis() {
    return new this('Genesis time','-----','firsthash-mrh123',[]); 
  }
}

module.exports = Block;


