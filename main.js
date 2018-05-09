var app = new Vue({
  el: '#app',
  data: {
    items: [],
    selected: [],
    selectAll: false,
  },
  methods: {
    list_items(){
      axios.get('https://api.github.com/repos/rg3915/orcamentos/issues')
      .then((result) => {
        this.items = result.data.map((item) => {
          return {number: item.number, id: item.id, title: item.title, state: item.state, url: item.url}
        })
      })
    },
    select(){
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].number);
        }
      }
    }
  },
  mounted(){
    this.list_items()
  }
})
