export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl text-indigo-500 font font-semibold text-center my-7'>
            About BizLOg
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Our startup board website is designed to foster meaningful interactions between investors and startup founders. This platform serves as a hub where entrepreneurs can seek advice, ask for assistance, and pitch their innovative ideas to potential investors. By facilitating direct communication and support, we aim to nurture the growth and success of startups within our vibrant community.

In addition to the core interaction features, our website includes a comprehensive blog section. This blog provides the general public with insightful articles and updates about the latest trends and happenings in the startup ecosystem. Whether you're an aspiring entrepreneur, a seasoned investor, or simply interested in the dynamic world of startups, our blog offers valuable information and perspectives.
            </p>

            <p>
             To enhance the user experience, we have integrated a secure payment gateway, ensuring that all financial transactions are handled smoothly and safely. This feature is essential for investors and users who need to pass through the payment process, adding a layer of security and trust to their interactions on the platform.

Our platform supports multi-user functionality, catering to different roles such as investors, startup founders, and general users. Each user has access to personal notifications, ensuring they are promptly informed about pitches, messages, and other important updates. For those who want to pitch their ideas, the platform provides a seamless process to send their proposals. Investors have the ability to accept or reject these pitches, with automated email notifications sent to the respective users, keeping everyone informed and engaged.

            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
