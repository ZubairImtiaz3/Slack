import React from "react";
import Image from "next/image";

import primaryCardBtn from "../../assets/svgs/primaryCardBtn.svg";

const primaryCards = [
  {
    heading: "Bring Your Team Together",
    discription:
      "At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.",
    buttonTitle: "More about channels",
  },
  {
    heading: "Choose how you want to work",
    discription:
      "In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.",
    buttonTitle: "Flexible Communication",
  },
  {
    heading: "Move faster with your tools in one place",
    discription:
      "With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.",
    buttonTitle: "Learn more about channels",
  },
];

function PrimaryCards() {
  return (
    <>
      <div className="primaryCards max-w-[85%] mx-auto font-syne space-y-14">
        {primaryCards.map((card) => (
          <div className="primaryCardContainer flex max-w-[75rem] h-auto lg:h-[20.625rem]">
            <div className="leftItems bg-yellow-500 w-[50%] h-full hidden md:block border-solid border-r-2 border-black"></div>

            <div className="rightItems md:w-[50%] w-[100%]">
              <div className="contentRightItems ml-8 mr-8 md:ml-16 md:mr-16 space-y-5 mt-14 mb-14 lg:mb-0">
                <h3 className="font-bold text-[calc(100%+0.325rem)] w-auto">
                  {card.heading}
                </h3>
                <p className="font-medium text-[calc(100%+0.01rem)] leading-[150%] max-w-[27.563rem] tracking-[0.015em]">
                  {card.discription}
                </p>
                <button className="flex font-medium text-[calc(100%+0.13rem)] py-[14px] px-6 rounded-[14px] border-solid border-black border-2">
                  {card.buttonTitle}
                  <Image className="ml-2" src={primaryCardBtn} alt="vector" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PrimaryCards;
