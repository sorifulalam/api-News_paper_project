const newsCatagories=()=>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(r => r.json())
    .then(data => displayCatagories(data.data))
}

const displayCatagories = catagories =>{
    //console.log(catagories)
    //capture catagoris parents container  all the catagorye links....
    const cetagoriesContainer  = document.getElementById('categories-container');

    //each catagorye link make to api
    catagories.news_category.forEach(singleCatagories =>{
   // console.log(singleCatagories)
   //cetagoriesContainer.innerHTML+= aykane += diya bujano hoiche joto gula api theke catagorey link name ache ayta porertar inerhtml  kaj korbe loper moton . exmp x++,x=x+1,x+= 
   cetagoriesContainer.innerHTML+=`
   
   <a class="nav-link m-auto mt-4" href="#" onclick="allNewsescategory('${singleCatagories.category_id}' ,'${singleCatagories.category_name} ')"> <strong>${singleCatagories.category_name}</strong></a>  

   `
    })
}

// fetch all categories newses from api 

const allNewsescategory=(category_id,category_name)=>{
    //console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
   // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data,category_name))
}
const displayData=(data,category_name)=>{
   // console.log(data,category_name);            // data.data ayta first er newacatagori function theke get kore peyechi ayta full api er data k load kore ................
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('category-name').innerText =category_name ;
    const newsContainer = document.getElementById('all-news');
    data.forEach(singleNews =>{
       // console.log(singleNews)
        newsContainer.innerHTML +=`
        
        <div class="card mb-3 container" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src=${singleNews.image_url} class="img-fluid rounded-start" alt="">
                  </div>
                  <div class="col-md-8 d-flex flex-column">
                    <div class="card-body">
                      <h5 class="card-title">${singleNews.title}</h5>
                      <p class="card-text">${singleNews.details.slice(0,400)}</p>
                    </div>
                    <div class="card-footer border-0 bg-body d-flex justify-content-between">
                    <div class="d-flex gap-2">
                    <img src=${singleNews.author.img} class="img-fluid rounded-circle" alt="" height='20' width='45'>
                    <div>
                    <p class="m-0 p-0">${singleNews.author.name}</p>
                    <p class="m-0 p-0">${singleNews.author.published_date}</p>
                    </div>
                    </div>
                    
                    <div class="d-flex align-items-center">
                    <i class="fa-solid fa-eye"></i>
                    <p class="m-0 p-0">${singleNews.total_view}</p>
                    </div>
                    <div></div>
                    <div></div>
                    </div>
                  </div>
                </div>
              </div>

        `
    })

}