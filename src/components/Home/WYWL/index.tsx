import { FC } from "react";
import { CloudItems } from "../../../constants/home";

export const CloudItemsList:FC = () => {
    return(<ul className="grid grid-cols-2">
    {CloudItems.map((item) => (
      <div key={item.key} className="flex gap-4">
        <item.Icon className="text-lg text-blue-700" />
        <li>{item.name}</li>
      </div>
    ))}
  </ul>)
}