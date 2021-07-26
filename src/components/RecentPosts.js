import Post from "./Post";

function RecentPosts() {
    return(   
         <div className="recent-post">
                <div className="recent-post-head">
                    <div className="rst-p">Recent Posts</div>
                    <div className="view-all">view all</div>
                </div>
                <div className="recent-post-cnt">
                    <Post postId={1} title="Making a design system from scratch" date="12 Feb 2020" category="Design, Pattern"  > </Post>
                    <Post postId={2} title="Creating pixel perfect icons in Figma" date="18 Feb 2020" category="Figma, Icon Design"> </Post>

                </div>
        </div>)
}

export default RecentPosts;