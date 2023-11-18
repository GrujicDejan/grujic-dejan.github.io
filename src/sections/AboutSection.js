import image from "../assets/images/img.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-100" id="about">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2> 
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={image}
              alt="img"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <p className="text-gray-600 leading-relaxed mb-4 text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              commodo, libero et fringilla convallis, arcu urna finibus dolor,
              et ullamcorper quam quam ac mi. Fusce sollicitudin facilisis lacus
              non varius. Integer eu purus in ipsum luctus efficitur. Sed nec
              felis ut odio convallis fermentum ac vitae neque.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify ">
              Praesent ullamcorper urna eu velit commodo, ac semper sapien
              tristique. In hac habitasse platea dictumst. Duis non urna vel
              libero fermentum vulputate vitae ut tellus. Sed nec purus vitae
              turpis auctor sagittis vel in leo. Vestibulum lacinia justo id
              venenatis facilisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
