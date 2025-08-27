import { data } from "react-router-dom";
import "../Pages/PagesStyle.css"
import { useEffect, useState } from "react";

const Home = () => {
    // useState() hook
    const [myDate, setDate] = useState("")

    // useEffect() hook
    useEffect(() => {
        let current = setInterval(() => {
            let currentDate = new Date().toLocaleString('en-US', {
                dateStyle: "full",
                timeStyle: "medium"
            })
            setDate(currentDate);
        }, 1000);
        // cleanup on unmount
        return () => clearInterval(current);
    }, [myDate])

    return (
        <>
            <div class="container homeContainer mt-5 pt-5">
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-3">
                            <div class="row g-0 p-2">
                                {/* card image */}
                                <div class="col-12 col-md-4 text-center">
                                    <img src="/img/gojo.png" class="img-fluid rounded-start" alt="..." style={{ height: "300px", objectFit: "contain" }} />
                                </div>
                                {/* card text */}
                                <div class="col-12 col-md-6">
                                    <div class="card-body">
                                        <h1 class="card-title mb-0">Aman Mujawar</h1>
                                        <h3 class="card-text profile-tech mb-0"><span className="dash-line"></span> <span className="profile-line">Python FullStack</span></h3>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary" id="date">{myDate}</small></p>
                                    </div>
                                </div>
                                {/* icons */}
                                <div class="col-12 col-md-1">
                                    <div class="container mediaContainer">
                                        <a href="https://www.instagram.com/amanmunirmujawar/" target="_blank" className="instagram media d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", margin: "2px", borderRadius: "10px" }}>
                                            <i class="bi bi-instagram"></i>
                                        </a>
                                        <a href="#" className="linkedin media d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", margin: "2px", borderRadius: "10px" }}>
                                            <i class="bi bi-linkedin"></i>
                                        </a>
                                        <a href="https://github.com/MJaman786" target="_blank" className="github media d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", margin: "2px", borderRadius: "10px" }}>
                                            <i class="bi bi-github"></i>
                                        </a>
                                        <a href="https://wa.me/918149629079?text=Hi%2C%20Aman%20Mujawar%20I%20found%20your%20Portfolio!" target="_blank" className="whatsapp media d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", margin: "2px", borderRadius: "10px" }}>
                                            <i class="bi bi-whatsapp"></i>
                                        </a>
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amanmujawar354@gmail.com&su=Hello%20Aman&body=I%20found%20your%20Portfolio!" target="_blank" className="github media d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", margin: "2px", borderRadius: "10px" }}>
                                            <i class="bi bi-envelope-paper-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;