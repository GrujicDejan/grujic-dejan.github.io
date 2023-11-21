import image from "../assets/images/img.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-100 section" id="about">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="sm:w-1/2 mb-4 md:mb-0">
            <img
              className="w-80 h-auto object-cover rounded-lg"
              src={image}
              alt="img"
            />
          </div>
          <div className="w-3/4 md:ml-4">
            <p className="text-gray-600 leading-relaxed mb-4 text-justify ">
              👋 Hello! I'm Dejan Grujić, a full-stack web developer from
              Serbia. I graduated in Information Technology from the Faculty of
              Sciences. Throughout my academic journey, I gained a deep
              understanding of programming and developed a passion for creating
              innovative solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify ">
              💻 With experience in both front-end and back-end technologies,
              I'm equipped to tackle the challenges of web application
              development. My projects not only showcase technical expertise but
              also a commitment to delivering users a seamless experience. I'm
              eager to learn and stay abreast of the latest trends and
              technologies in the ever-evolving world of web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
