const About = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            About Lund
          </h2>
          <p className="text-gray-600 text-lg">
            At <span className="font-semibold text-orange-500">Lund</span>, we
            believe great food brings people together. Here's our story.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?semt=ais_items_boosted&w=740"
              alt="Lund food presentation"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded with a passion for flavor and community, Lund is your
              go-to destination for fresh, delicious, and wholesome meals.
              Whether you're on the go or enjoying a cozy dinner at home, our
              curated menu offers something for everyone.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver unforgettable food experiences made with love, local
              ingredients, and a sprinkle of innovation. We aim to create joy,
              one bite at a time.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Join the Lund Family
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're a foodie, a chef, or a partner who shares our love
            for great cuisine, we'd love to connect with you. Let’s grow
            together with flavor, passion, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
