
export default {
    name: 'Clients',

    components: {},

    mixins: [],

    props: {},

    data() {
        return {
            form: false,
            items: [],
            filter: "",
            fields: [
                {key: 'name', sortable: true, label: 'Nome do Cliente'},
                {key: 'name', sortable: false, label: 'Nome do Cliente'},
                {key: 'email', sortable: true},
                {key: 'email', sortable: false},
                {key: 'status', sortable: true},
                {key: 'status', sortable: false},
                {key: 'titulo', sortable: true},
                {key: 'titulo', sortable: false},
                {key: 'valor', sortable: true, label: 'R$ Valor'},
                {key: 'valor', sortable: false, label: 'R$ Valor'},
                {key: 'desde', sortable: true, label: 'Desde'},
                {key: 'desde', sortable: false, label: 'Desde'},
            ],
            cliente: {
                name: '',
                email: '',
                status: '',
                titulo: '',
                valor: '',
                desde: ''
            }
        }
    },

    computed: {},

    watch: {},

    created () {
        this.index()
    },

    methods: {
        index() {
            this.$http.get('clientes').then(
                resp => {
                    this.items = resp.data
                }
            )
        },
        store(){
            this.$http.post('clientes', this.cliente)
                .then(resp => {
                        console.log(resp.data)
                        this.index()
                        this.viewForm()
                            this.cliente.name= '',
                            this.cliente.email= '',
                            this.cliente.status= '',
                            this.cliente.titulo= '',
                            this.cliente.valor= '',
                            this.cliente.desde= ''
                    }
                )
        },
        viewForm(){
            this.form = !this.form
        }
    }
}
