export default function Home(){
    return(
    <div style={{
            
            display:"flex",
            flexDirection:"column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "40rem",
            height: "25rem",
            backgroundColor: "lightgrey",
    }}>
       <div style={{
            marginTop: "30px",
            width: "20rem",
            height: "12rem",
            backgroundColor: "blue",
            position: "center",
            marginBottom: "40px",
            marginLeft: "20px",
            marginRight: "20px"
            
        }}>
            
            
        </div>
        <button style={{
                marginLeft: "10rem",
                display:"flex",
                alignSelf:"flex-start",
                backgroundColor:"Lightgreen",
                alignItems:"center",
                justifyContent:"space-around",
                color:"black",
                fontStyle: "arial",
                fontSize: "12",
                width: "120px",
                height: "40px",
                marginBottom: "40px",
                borderRadius: "1rem",
                border:"0"
                }}>DM</button>   

              <h2 style={{
                marginBottom: "40px",
                display:"flex",
                alignSelf:"flex-start",
                marginLeft: "10rem"
              }}>@username</h2>
            <h3 style={{
                marginBottom: "40px",
                display:"flex",
                alignSelf:"flex-start",
                marginLeft: "10rem"}}>bio...........</h3>
                  
    </div>
        
    );
  
}
