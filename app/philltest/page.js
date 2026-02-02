export default function Home() {
    return (
        <div>
            <div style={{
                width: "40rem",
                height: "15rem",
                backgroundColor: "lightgrey",
                color: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "flex-end",
                margin: "2rem",
                padding: "2rem",
            }}>
                <h4 style={{
                    alignSelf: "flex-start",
                    fontFamily: "arial",
                    fontSize: 16,
                }}>@username</h4>
                <p style={{
                    alignSelf: "flex-start",
                    fontFamily: "arial",
                    fontSize: 16,
                }}>comment 1 lorem ipsum yadi yadi so ......................................................................</p>
                <p style={{
                    fontStyle: "italic",
                    fontFamily: "arial",
                    fontSize: 16,
                }}>dd/mm/yy- 00:00:00
                </p>
                <button style={{
                    width: "8rem",
                    height: "3rem",
                    backgroundColor: "lightgreen",
                    color: "black",
                    borderRadius: "1rem",
                    border: "0",
                    fontFamily: "arial",
                    fontSize: 16,
                }}>Reply</button>
            </div>
        </div>
    );
}
