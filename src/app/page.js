"use client";
import { storage} from "@/storage/firebase";
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { useState } from "react";


export default function Home() {
  const [imgs,setImgs] = useState([]);

  function upload(file){
    const storageRef = ref(storage, '/photo/' + file.name);
  
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot);
    });
  }

  async function  getImages() {
    listAll(ref(storage,'photo'))
    .then(async (res) => {    
        let imgUrl = [];
        for(let i=0;i<res.items.length;i++){
            let a= await getDownloadURL(res.items[i]);
            imgUrl.push({url:a,name:res.items[i].fullPath})
        }
        setImgs(imgUrl);
    })
  }

  async function  delImage(str) {
    deleteObject(ref(storage, str) )
  }
console.log(imgs);
  return (
   <>
      <article>
        <h2>파일등록</h2>
        <div>
          <form>
            <input type="file" onChange={(e)=>{upload(e.target.files[0])}} />
          </form>
        </div>
      </article>


      <article>
        <h2>파일가져오기<button onClick={getImages}>출력</button></h2>
        <div>
          {
            imgs.map((obj,k)=>(
              <p key={k}>
                <img src={obj.url} />
                <button onClick={()=>{delImage(obj.name)}}>삭제</button>
              </p>
            ))
          }
        </div>
      </article>
   </>
  );
}
