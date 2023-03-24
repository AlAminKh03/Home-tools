import React from "react";
import workerPic from "../../assests/blog/worker.jpg";
import tools from "../../assests/blog/tools.jpg";
import nails from "../../assests/blog/nails.jpg";

const Blogs = () => {
  return (
    <div className="mt-20 lg:mx-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-4 border-black border-b-[15px] border-r-[15px] rounded-md border-b-black">
        <div>
          <img
            src={workerPic}
            alt="worker pic"
            className="w-[350px] h-[500px] border border-r-8 border-rb-rounded-md border-r-amber-300 border-b-amber-300 border-b-8 grow min-h-full min-w-full object-cover "
          />
        </div>
        <div className="p-4">
          <p className="font-mono text-3xl font-bold">
            We should talk about more about worker safety:{" "}
          </p>
          <p className="font-mono text-sm text-left">
            Worker safety is a critical concern for every workplace, regardless
            of the industry. Employers have a legal and ethical obligation to
            ensure that their employees are protected from hazards and injury
            while on the job. However, workplace accidents and injuries still
            occur, and they can have severe consequences for both the workers
            and the employer. Therefore, it's essential to prioritize worker
            safety and take appropriate measures to prevent workplace accidents.
            <br />
            The first step in ensuring worker safety is to conduct a thorough
            assessment of the workplace. This assessment should identify
            potential hazards that could cause harm to workers. Once these
            hazards have been identified, appropriate measures should be taken
            to mitigate or eliminate them. This might involve making changes to
            the physical workspace, such as installing safety equipment or
            modifying machinery, or implementing new policies and procedures
            that promote safe practices. <br />
            One of the most effective ways to improve worker safety is through
            training and education. Workers should be provided with the
            necessary knowledge and skills to identify and avoid potential
            hazards. This might include training on the proper use of equipment,
            how to handle hazardous materials, and emergency procedures.
            Employers should also provide ongoing training to ensure that
            workers stay up to date on the latest safety practices. <br />
            In conclusion, ensuring worker safety is a critical responsibility
            for employers in all industries. By conducting a thorough assessment
            of the workplace, providing appropriate training and education,
            equipping workers with the necessary PPE, creating a culture of
            safety, and having a plan in place for emergencies, employers can
            help prevent workplace accidents and protect the health and
            well-being of their workers.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-4 border-black border-b-[15px] rounded-md border-b-black mt-5 border-l-[15px]">
        <div className="p-4">
          <p className="font-mono text-3xl font-bold">
            tips to help you identify good wood tools:{" "}
          </p>
          <ul className="font-mono text-sm text-left list-disc">
            <li>
              <span className="font-bold"> Material:</span> Look for wood tools
              made from high-quality materials, such as high-carbon steel or
              high-speed steel. These materials are known for their durability,
              toughness, and ability to hold a sharp edge. Avoid tools made from
              cheap or inferior materials, as they will not perform well and may
              be prone to breaking or chipping.
            </li>
            <li>
              <span className="font-bold"> Handle:</span> Check the handle of
              the tool to ensure it is well-constructed and comfortable to hold.
              Handles made from high-quality wood, such as ash or hickory, are
              durable and provide a good grip. Look for handles that are
              ergonomic, with a shape that fits comfortably in your hand.
            </li>
            <li>
              <span className="font-bold"> Blade:</span> The blade of the tool
              should be sharp, straight, and smooth. Look for tools with blades
              that are free from cracks, chips, or other damage. Check the
              blade's edge to ensure it is properly ground and honed. A good
              quality blade will hold its edge well and require less frequent
              sharpening.
            </li>
            <li>
              <span className="font-bold"> Brand:</span> Look for tools from
              reputable brands that are known for their quality and durability.
              Popular brands like Stanley, Irwin, and DeWalt are good choices
              for wood tools, as they have a reputation for producing
              high-quality tools that are designed to last.
            </li>
            <li>
              <span className="font-bold"> Reviews:</span>Check online reviews
              from other users to get an idea of the tool's quality and
              performance. Look for tools with positive reviews and high
              ratings, as these are likely to be good quality.
            </li>
          </ul>
        </div>
        <div>
          <img
            src={tools}
            alt="worker pic"
            className="w-[500px] h-[350px] border border-r-8 border-rb-rounded-md border-r-amber-300 border-b-amber-300 border-b-8 grow min-h-full min-w-full object-cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-4 border-black border-b-[15px] border-r-[15px] rounded-md border-b-black mt-10 mb-5">
        <div>
          <img
            src={nails}
            alt="worker pic"
            className="w-[350px] h-[500px] border border-r-8 border-rb-rounded-md border-r-amber-300 border-b-amber-300 border-b-8 grow min-h-full min-w-full object-cover "
          />
        </div>
        <div className="p-4">
          <p className="font-mono text-3xl font-bold">Know your nails: </p>
          <ul className="font-mono text-sm text-left list-disc">
            <li>
              <span className="font-bold"> Common Nails:</span> These are the
              most basic type of nail and are used for general construction and
              framing.
            </li>
            <li>
              <span className="font-bold"> Finish Nails:</span> These nails are
              used for finishing work, such as trim and molding, because they
              have small heads that can be easily concealed with putty or wood
              filler.
            </li>
            <li>
              <span className="font-bold">Brad Nails: </span> These are very
              thin, small nails that are used for delicate work such as
              attaching trim to furniture or cabinetry.
            </li>
            <li>
              <span className="font-bold">Roofing Nails:</span> These nails are
              used for attaching shingles and roofing materials to a roof.
            </li>
            <li>
              <span className="font-bold">Concrete Nails:</span>These are
              designed for use with concrete and masonry and have fluted or
              grooved shafts for better grip.
            </li>
            <li>
              <span className="font-bold">Upholstery Nails: </span>These are
              used for attaching wood to concrete or masonry.
            </li>
            <li>
              <span className="font-bold">Paneling Nails: </span>These are used
              for attaching fabric to furniture frames.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
