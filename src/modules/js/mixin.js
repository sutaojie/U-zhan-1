import Foot from 'components/Foot.vue'

let mixin={
    filters:{
        numberFolat(price){
            return parseFloat(price)
        },
        numberSplit(price){
            var prices =price.toFixed(2)
                prices = price.toString().split('.')
            var arr = prices[0].toString().split('').reverse().map((v,k)=>{
                var sum = ''
                    if(k%3===0 && k!=0){
                        v += ','
                    }
                    sum += v
                    return sum
                })
              
                
                
            return  arr.reverse().join('') + '.' + (prices[1]===undefined?'00':prices[1])
   
        }
    },
    components:{//注册
        Foot
    },
}
export default mixin