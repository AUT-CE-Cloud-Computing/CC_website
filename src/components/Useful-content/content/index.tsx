import { FC, PropsWithChildren } from "react";
import { UsefulContent } from "../../../types/types";

interface UsefulContentProps extends PropsWithChildren{
    content: UsefulContent
}

export const Content: FC<UsefulContentProps> = (props) =>{
    return(
        <div className="container min-h-28 flex flex-col md:flex-row border-gray-400 border-[0.002px] rounded-lg overflow-clip gap-10 w-full">
            <div className="w-[25%]">
                <img className="w-full h-full object-cover" src={props.content.cover} alt="" />
            </div>
            <div className="flex flex-col justify-around w-[75%]">
                <h2 className="font-bold">{props.content.title}</h2>

                <p className="text-gray-500 font-thin">{props.content.description}</p>
            
                <a target="_blank" href={props.content.link} className="self-end mx-4">more...</a>            
            </div>
        </div>
    )
}