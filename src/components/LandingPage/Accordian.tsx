import List from "../modules/List";
import AccordianSVG from "../modules/svg/AccordianBGSVG";

export default function Accordian() {
  return (
    <section className="max-w-5xl mx-auto px-1">
      <div className=" relative bg-[#E8EEE7] max-lg:flex max-lg:flex-col max-lg:gap-8 grid grid-cols-2 mx-auto mt-36 px-10 py-8 rounded-3xl">
        <AccordianSVG />
        <div className="">
          <div className="ml-8 ">
            <div className="text-[#9E9D9D] font-CoverByYourGrace text-lg">
              What’s on your mind
            </div>
            <div className="font-ManRope font-semibold text-3xl">
              Ask Questions
            </div>
          </div>
        </div>
        <div className="px-4 divide-y divide-[#D7D7D7] space-y-4">
          <List>Do you offer freelancers?</List>
          <List>
            What’s the guarantee that I will be satisfied with the hired talent?
          </List>
          <List description="If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.">
            Can I hire multiple talents at once?
          </List>
          <List>Why should I not go to an agency directly?</List>
          <List>
            Who can help me pick a right skillset and duration for me?
          </List>
        </div>
      </div>
    </section>
  );
}
