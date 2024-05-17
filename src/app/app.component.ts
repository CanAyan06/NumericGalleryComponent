import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage=0;
 images = [
   {
     title:'Deniz Kum Güneş',
     url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
   },
   {
    title: 'Belgrad Ormanı',
    url:
      'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
  },
  {
    title: 'Maslak',
    url:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60'
  },
  {
    title: 'Yarasa',
    url:
      'https://cdn.gencraft.com/prod/custom_model_thumbnail/bf3934b6-dfe0-446f-a590-fc2dfbc06101/u_d3ea3472-2361-40a1-81a0-e9fbe55eb8e8.png?Expires=1716029773&Signature=HnUHFZq3qRxwX-tVMZcer9yDlULoRwg8hoodY~FtLv~aKq4MPDrAieuMItfah~r0mnT57pFjbDTUdvDTm8spyygpzgiI-FL6UQr-WCX3fitZ74b2PnlgXK1GUQRlt1IQ-F3WWt~mPQ0BtTLTnbG6wsj5uNyxxIXEBVw-4ThfE5dsrah68KiExz5XJacfsdFl9pt0DF0CcyYToIuxRP7fusEuzFrZ85TC8fZ8SL3EAJIVpLnOMMFONhDG~ujFUjEndwuaEb5GTlkxVzbTvAN8nhNIIMi14lMewsTP5r9uIn8HWeWBatmKnSmhvRAMd5wrXwqcYf-ZsYkYBcjWVSQpTQ__&Key-Pair-Id=K3RDDB1TZ8BHT8'
  },
  {
    title: 'Kedi',
    url:
      'https://cdn.gencraft.com/prod/custom_model_thumbnail/3c9c19be-4b55-43d6-85c8-e257deacff3a/u_9bf54d32-4034-446e-97ed-ac98db4aebfb.jpg?Expires=1716029870&Signature=D72OH8MGduGXioBHnFeFBDZa5GDt~k1Piruem8pdn--jnMqBcSZOLX-KZSZfF1IC4JKEwhfy-2sVXKRQU7HVFZgqrmHa4CqOH9S~0wHsUkB8qa4OhzUBueGV51EndSn5Y70Sds-CkQ-Nt73zE7keRG3chIKLwTgqNqbkEqON6Rd4iqeZxX0AYRC8zsaQiSxPc99xE0gyQmBjbEJ4jQrY8eUdIN7ONG6j62TFzUjtOhXZSgoI2CPSECEPJC3KQfL675yWlp7DsBd2ISv5JD3zh-QGDxnOeFsIFDmcV9cXOzu-fWNrJwjG6a11iItZI-vt5NJKR8OoHx-xf67cL3Fzzg__&Key-Pair-Id=K3RDDB1TZ8BHT8'
  },
  {
    title: 'Köpek',
    url:
      'https://cdn.gencraft.com/prod/custom_model_thumbnail/b222da53-6094-4a57-9d00-698ac4c318ce/u_748168a9-0ee3-468c-bd50-bbc7bd19308b.jpg?Expires=1716029870&Signature=hHgAgeV27YLGDgnloxtCZ9oX3nOIgsR2HPF~erTmsB85a9bcl-u5KBHfI2IbaYK4LYtM-sRIRuJ6OKsYH34ulh8wLZVjp30dkd0ltA0cBCj0i2F2NMmpeEXUz7h6ginMu-K~NpdmhDyv137eXzxNHWrR37-eLPtoiWQTAnfqwlUNtHkJEvEjKTLwXURIwPMbBOnCYzOHY7bgsRbhl9PVnfYqDGiBMRKWFqKEpZWFLT-cpgdY2cSa5itaxcz95iI~FPCuLYeehSHQEOVjhyMc0HOU2iTh45LEMFnm~7dNvFDMoZWFowiphjkwXhCVFwRwTMYtZYUcRGwtPmmyDk90HQ__&Key-Pair-Id=K3RDDB1TZ8BHT8'
  },
 
  {
    title: 'Harita',
    url:
      'https://cdn.gencraft.com/prod/custom_model_thumbnail/0dc5acfa-2fe2-45ab-bd4c-405662070148/u_f95b2ca1-4f79-464b-95d4-4ddcd9fd0907.png?Expires=1716039458&Signature=osAhF3-ArfgUEySdsN7AmNskRcQquhYlWPqDpCw3zD6YAMMwsxZDP1doLns2toncLNP53rWssh3AHC5jFCMIMIQ~miIHt4c5OwfAoyYJXQbp726KSodHwADxhX9E~HEIkODFJFY57UM1ZicHxINj9npyAtB645OQumxGN6oVdkcEV2yQ20GhIYP1eu3g4eFufS5oANY0gi9TgWZN9h~mKvEOEd4LAJZS3f~nrEP4iskbSBjI62mitX52mo8S8VBFhPoaRjamRIK74O5qSpicEhGX0n4xMnYYQKGgjeG3KGL2-2uXUdvGGtU~HTwTZjhHJ~OUD7V65-pX6QObuU6gOg__&Key-Pair-Id=K3RDDB1TZ8BHT8'
  },
  {
    title: 'Araba',
    url:
      'https://cdn.gencraft.com/prod/custom_model_thumbnail/c852c117-fa70-4f16-beb6-35ffd1551c28/u_a1b53e03-62d6-4e24-897c-5182122e541c.jpg?Expires=1716039501&Signature=Ohy5Jh23LV1EstU0TQi5YuFCkpVfFCY4h2yu7gberlT3ipM2xXGvqChe5lOXH4s0Qy8r7uTYMO9xksEZa5E-LZPxPQCEU6bjmbALjW1ZLfkNVtk~hDPp8qd5IfJ7Tv1svPaySTN2xVA~PHsEbtO6CunoMzgNlRYTxhLu8N6xao~r4KpYigDsQhJlGqaL-Yqnc0di4p2MXxOtnVSkQNgbP2RWuJ1~-E5eiTccpSEntzAgzivZuXasTRn5juN~lIk6dn0mWCh1dcqKuMgjHEb3CBdkUkHhwVGdP5cBXoiqze3vOePp2Y3kWpf0faBjeLKmNbIwEYo0iZLiLdpThpsGyw__&Key-Pair-Id=K3RDDB1TZ8BHT8'
  },
  {
    title: 'At',
    url:
      'https://gencraft.com/api_resources/images/model_previews/core_image_v2_lora_long_exposure.jpg?noCors=2'
  },
  {
    title: 'Su Aygırı',
    url:
      'https://cdn.gencraft.com/prod/custom_model_thumbnail/245c103e-6ea1-4864-9d55-b3ba0a279ffe/u_59407377-1ec8-4b50-836d-7e90e2c3f8cd.png?Expires=1716039501&Signature=NSZTww9VZlwnTr2O~N1X5qiLYK8VK402PihMugNSETTIyhXH~2Zj26DQbW9QgQ3CyBTMb1RWCccKIy9iV0iy3kZjm7AXWI4AXogacts7g2wtXZTTBN617vN2Ezzl5seji4kbqX5spE9mIZhJTMc1eEUmaK1JOgx0anTp~V123S~Wz2f0IqsrdrFWmH04OlOXLaBy4Xo2uKaKtMZ~ZICFsIRlGrhAn0yvvHMdixa1tHrtvvw3eQmtqi7htK6rGr2cC7aM5rR6hxWD84TnFU2Mb75-LxmBcF9shkVPojwXy9XbtK0SGEj9p307RjSRJd1c5fi8d6ncSFhye09~AM-oeQ__&Key-Pair-Id=K3RDDB1TZ8BHT8'
  },
  {
    title: 'Masal Gibi ',
    url:
      'https://cdn.gencraft.com/prod/custom_model_thumbnail/ebeea2fd-e29d-46de-9c65-4ef039e035c5/c_8a08fb20-6a60-48f8-ba61-8b48a3a12892_1715367407.jpg?Expires=1716039434&Signature=Xv27j5eW3M99chDDfnc9H7rYQqgvsVVLwA9BK6Sfk4HbV5fRHVH6YsxzlkWxxlRljXv3ahLgeZlBpoWnXxF3ziloFFfog-oEhzekKHtWyVGS8x9MZXh3JSDf4Ke822lSGbeD3AVd07~Qg9xwNj~5qK3cc~E-erJSFyaaZEvMl36XWmZW31lizoXO~6R99FO1GJ4oZAJ6a0Fo4mkrd1da7mFjD9icbFb3mLYYa1qT~6oUUtWC901gfjws1d8uLIY5WJUlRJAq4SRaC1SJX1mvwRxJyXM2AzP9ValsgxFDKyvT8eeRZS~950EVvDp504GKaa1F-tcx9fgsgHjc~enT2w__&Key-Pair-Id=K3RDDB1TZ8BHT8'
  },
  {
    title: 'Büyü',
    url:
      'https://cdn.gencraft.com/prod/custom_model_thumbnail/50cb3892-9393-4109-8af7-cb488a5fc487/u_9296ce43-13ba-4685-a0d3-e926a3692fcd.png?Expires=1716039458&Signature=L4~KN6z66~SSURW0Dc5cnz0bNqlL3473xo-EtmLiQXs8Nyw77IErxN~G8fYBvjdMDSv-KJLXXj4qZn6WMWGTU6aZcu3BsPbTePnioWEpde9WHzSSRrDrps0BItvRVYNH5yKzI~k4bQbI0mgEyfT7bmlWpzGZF46Fr8u58p6xwd~Yi6YANPYGmq-J97QhylHYcCanNzZzMVIsah4GpJWnZfhuk168VLhJuJhuqR5~mnuxYpay8uabHAqSqDfQ7q~w-9w4zW9Lb1ruRk0r3U-n1VI06hXxbqF6Wut1R~G5hUkBLIwGzr~mH9DFGoL0L~m2f1f3jOhnTFFTs2YrLnRr4g__&Key-Pair-Id=K3RDDB1TZ8BHT8'
  },


 ]
 //changePage(number:number){
  //this.currentPage=number;

// }
PageIndex(index:number){
  return Math.abs(this.currentPage - index)  < 5;

}
}
