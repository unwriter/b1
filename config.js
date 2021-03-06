module.exports = {
  "rpc": {
    "protocol": "http",
    "user": "root",
    "pass": "bitcoin",
    "host": "127.0.0.1",
    "port": "8332",
    "limit": 15
  },
  "db": {
    "name": "bitdb",
    "url": "mongodb://localhost:27017",
    "index": {
      "keys": ["tx", "senders.a", "senders.tx", "senders.index", "receivers.a", "receivers.index", "block_index", "block_time", "block_hash", "index", "str", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13", "b14", "b15", "b16", "s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16"],
      "fulltext": ["s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16"]
    }
  },
	"zmq": {
    "incoming": {
      "host": process.env.localhost ? process.env.localhost : "127.0.0.1",
      "port": "28332"
    },
    "outgoing": {
      "host": process.env.localhost ? process.env.localhost : "127.0.0.1",
      "port": "28339"
    }
	}
}
