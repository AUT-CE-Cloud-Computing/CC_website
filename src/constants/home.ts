import { BiSolidAnalyse } from "react-icons/bi";
import { IoLogoDocker } from "react-icons/io5";
import { SiApachehadoop, SiApachespark, SiKubernetes, SiOpenstack, SiVmware } from "react-icons/si";
import { TbGridPattern } from "react-icons/tb";
export const info = `This Course is on introducing fundamentals of Cloud Computing and
related technologies; starting by diving deep inside the topic of
virtualization and explaining different kinds of virtualization,
moving on to abstract ways of virtualization, such as using docker
instead. by introcing docker, we then explain more and more on docker
and kubernetes. then we forward to Big Data Analytics and tools such
as Apache Spark & Hadoop. also a new programming paradigm Called 
 MapReduce 
is introduced helping students learn more on how big data proccesing
is done. At last technology, we have OpenStack which enables us to
create a backbone Cloud and manage VM's`
export const CloudItems = [
    {
        "name": "Virtualization",
        "Icon" : SiVmware ,
        key:1
    },
    {
       
        "name": "Docker",
        "Icon" : IoLogoDocker ,
        key:12  
    },
    {
       
        "name": "Kubernetes",
        "Icon" : SiKubernetes ,
        key:13  
    },
    {
       
        "name": "Big Data & Analyics",
        "Icon" : BiSolidAnalyse  ,
        key:14 
    },
    {
       
        "name": "Mapreduce programming pattern",
        "Icon" : TbGridPattern  ,
        key:15 
    },
    {
       
        "name": "Hadoop",
        "Icon" : SiApachehadoop  ,
        key:16 
    },
    {
        "name": "Spark",
        "Icon" : SiApachespark,
        key:17
    },
    {
       
        "name": "OpenStack",
        "Icon" : SiOpenstack   ,
        key:18
    }
]

export const Instructors = 
    {
        "Name" : "Dr.Ahmad javadi",
        "Photo": "https://i1.rgstatic.net/ii/profile.image/1016388382621697-1619337282460_Q512/Seyyed-Ahmad-Javadi-2.jpg",
        "Office-Hours": "Moday 2:00-3:00 P.M"
    }
