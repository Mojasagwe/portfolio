import React from "react";
import "./about.css";
import me from "../pictures/me.JPG";

export const About = () => {
	window.addEventListener("scroll", function () {
		const upToTop = document.querySelector("a.bottom__to__top");
		upToTop.classList.toggle("active", window.scrollY > 0);
	});
	return (
		<div className="about component__space" id="About">
			<div className="container">
				<div className="row">
					<div className="col__2">
						<img src={me} alt="" className="about__img" />
					</div>
					<div className="col__2">
						<h1 className="about__heading">About Me</h1>
						<div className="about__meta">
							<p className="about__text p__color">
								I am a qualified software developer, and a certified java
								programmer completed my diploma in software development in 2021
								March, and ever since then I have put it upon myself to grow and
								become the best developer I could ever imagine, and use these
								skills to solve some of the most unique problems.
							</p>
							<p className="about__text p__color">
								On a daily basis, I keep busy working and writing code to grow
								my technical skills and to create an outstanding portfolio I am
								interested in both the backend and frontend of development
							</p>
							<p className="about__text p__color">
								I would like to thank you for taking the time to look through my
								portfolio you can also have a look through my GitHub profile or
								LinkedIn
							</p>

							<div className="about__button d__flex align__items__center">
								<a href="#">
									<button className="about btn pointer ">Download CV</button>
								</a>
								<a href="https://github.com/Mojasagwe">
									<button className="about btn pointer ">GitHub</button>
								</a>
								<a href="https://www.linkedin.com/in/tpmmadi/">
									<button className="about btn pointer ">LinkedIn</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="up__to__top__btn">
				<a href="#" className="bottom__to__top">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-capslock-fill"
						viewBox="0 0 16 16">
						<path d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1H1.654C.78 9.5.326 8.455.924 7.816L7.27 1.047zM4.5 13.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1z" />
					</svg>
				</a>
			</div>
		</div>
	);
};
