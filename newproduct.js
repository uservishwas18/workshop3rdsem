let PARLE={
   p_id:101,
   p_name:"biscuits",
   p_price:50,
   p_quantity:5,
   total_price:function(){
      return this.p_price*this.p_quantity
   },
 update_quantity:function(new_quantity){
     this.p_quantity=new_quantity;
  },
  product_info:function(){
   console.log(this.p_id)
   console.log(this.p_name)
   console.log(this.total_price())
   console.log(this.p_quantity)
   console.log(this.update_quantity(10))
  }


}
PARLE.product_info()