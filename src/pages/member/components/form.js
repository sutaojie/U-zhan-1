import Address from 'js/addressService.js'
export default {
    data(){
        return {
            name:'',
            tel:'',
            provinceValue:-1,
            cityValue:-1,
            districtValue:-1,
            address:'',
            id:'',
            type:this.$route.query.type,
            instance:this.$route.query.instance,
            addressData: require('js/address.json'),
            cityList:null,
            districList:null,

        }
    },
    computed:{
        lists(){
            return this.$store.state.lists
        }
    },
    created(){
        if(this.type === 'edit'){
            let adr = this.instance
            this.provinceValue = parseInt(adr.provinceValue)
            this.name = adr.name
            this.tel = adr.tel
            this.adr = adr.address
            this.id = adr.id
        }
    },
    watch:{
        provinceValue(val){
            if(val === -1) return ;
            let list = this.addressData.list
            let index = list.findIndex(item => {
                return item.value === val
            })
            this.cityList = list[index].children
            this.cityValue = -1
            this.districtValue = -1

            if(this.type === 'edit'){
                this.cityValue = parseInt(this.instance.cityValue)
            }
        },
        cityValue(val){
            if(val === -1) return ;
            let list = this.cityList
            let index = list.findIndex(item=>{
                return item.value === val
            })
            this.districList = list[index].children
            this.districtValue = -1
            if(this.type === 'edit'){
                this.districtValue = parseInt(this.instance.districtValue)
            }
        },
        lists:{
            handler(){
                this.$router.go(-1)
            },
            deep:true
            
        }
    },
    methods:{
        add(){
            let {name, tel, provinceValue, cityValue, districtValue, address} = this
            let data = {name, tel, provinceValue, cityValue, districtValue, address}
            if(this.type === 'add'){
                // Address.add(data).then(res =>{
                //     this.$router.go(-1)
                // })

                this.$store.dispatch('addAction', data)
            }
            if(this.type === 'edit'){
                data.id = this.id
                // Address.updata(data).then(res =>{
                //     this.$router.go(-1)
                // })
                this.$store.dispatch('updataAction', data)
            }
            
        },
        setDefault(){
            // Address.setDefault(this.id).then(res =>{
            //     this.$router.go(-1)
            // })
            
            this.$store.dispatch('setDefaultAction', this.id)
        },
        remove(){
            if(window.confirm('确定删除？')){
                // Address.remove(this.id).then(res =>{
                //     this.$router.go(-1)
                // })

                this.$store.dispatch('removeAction', this.id)
            }
        }
    }
}