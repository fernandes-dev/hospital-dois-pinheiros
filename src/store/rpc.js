class RPC {
  static procedure(path, state) {
    if(!this.mutations || !this.actions) {
      this.mutations = {}
      this.actions = {}
    }
    
    this.mutations[path] = (states, data) => {
      states[state] = data
    }

    this.actions[path] = context => {
      fetch((this.base || '/') + path, {method: 'POST'})
        .then(r => r.json())
          .then(data => context.commit(path, data))
    }
  }

  static base(base) {
    RPC.base = base + '/'
  }
}

export default RPC