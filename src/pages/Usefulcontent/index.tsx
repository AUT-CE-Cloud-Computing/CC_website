import { FC } from "react";
import { Post } from "../../components/Base/Post";
import { Content } from "../../components/Useful-content/content";
import { useSupabaseData } from "../../hooks/useSupabase";
import { Loader } from "../../components/Base/Loader";

export const UsefulContent:FC = () => {

    const { data, loading, error } = useSupabaseData('content');

    console.log(data);
    


    return (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* Main content */}
            <main className="w-full lg:w-3/4 px-4">
              <Post>
              <h1 className="text-2xl font-bold mb-4">Useful Content</h1>
              {/* Add your main content here */}
              <div className="mb-4 flex flex-col gap-10">
                {/* Your main section content */}
                {loading && <Loader />}
                {error && <div>Error: {error!.message}</div>}
                {data.map(item => <Content key={item.id} content={item}/>)}
              </div>
              </Post>
            </main>
    
            {/* Sidebar with secondary content */}
            <aside className="w-full lg:w-1/4 px-4">
              <Post>
              <h2 className="text-xl font-semibold mb-3">Links & Resources</h2>
              {/* Add your secondary content here */}
              <ul>
                {/* Map through your links and list items */}
                <li className="mb-2">Link 1</li>
                <li className="mb-2">Link 2</li>
                <li className="mb-2">Link 3</li>
                {/* Add more list items as needed */}
              </ul>
              </Post>
            </aside>
          </div>
        </div>
      );
}