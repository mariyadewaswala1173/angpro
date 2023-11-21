import { Course } from './courses';

export class CourseService {
  course: Course[] = [
    {
      id: 1,
      title: 'Web Designing',
      disc: `<ul>
            <li>Understand the basics of <strong>HTML and CSS</strong>, the building blocks of web design.</li>
            <li>Create well-structured, semantically meaningful <strong>HTML documents</strong>.</li>
            <li>Apply <strong>CSS styles</strong> to control the layout, typography, and visual design of web pages.</li>
            <li>Learn the principles of <strong>responsive design</strong> to create websites that adapt to different screen
                sizes and devices.</li>
            <li>Focus on <strong>user-centered design principles</strong> to enhance the overall user experience.</li>
            <li>Understand <strong>user personas</strong>, <strong>user flows</strong>, and <strong>wireframing
                    techniques</strong>.</li>
            <li>Apply effective <strong>typography</strong> and <strong>color choices</strong> to create visually appealing and
                readable web designs.</li>
            <li>Optimize and integrate <strong>images and graphics</strong> for web use. Understand image formats, resolution,
                and compression techniques.</li>
            <li>Learn about <strong>grid systems</strong> and how to create well-structured layouts for web pages.</li>
            <li>Apply design principles for a balanced and aesthetically pleasing look.</li>
            <li>Comprehend the importance of <strong>web accessibility</strong> and create designs that are inclusive for users
                with disabilities. Implement best practices for accessible design, such as proper HTML semantics and alternative
                text for images.</li>
            <li>Design interactive elements like <strong>buttons</strong>, <strong>forms</strong>, and <strong>navigation
                    menus</strong>. Create intuitive and user-friendly <strong>user interfaces</strong>.</li>
            <li>Familiarize yourself with CSS frameworks like <strong>Bootstrap</strong> or preprocessors like
                <strong>SASS</strong> to streamline the design and development process.</li>
            <li>Gain proficiency in web design tools such as <strong>Adobe XD</strong>, <strong>Sketch</strong>,
                <strong>Figma</strong>, or other design software. Understand how to create design mockups and prototypes.</li>
            <li>Stay up to date with current web design trends and best practices. Understand the importance of staying current
                in a fast-evolving field.</li>
            <li>Test and ensure that web designs work consistently across various web browsers and devices.</li>
            <li>Learn techniques to optimize website performance, including image optimization, code minification, and caching
                strategies.</li>
            <li>Understand the basics of <strong>SEO</strong> and how web design can impact a website's search engine rankings.
                Implement on-page SEO techniques.</li>
            <li>Acquire the skills to test, troubleshoot, and debug web designs for issues and errors.</li>
            <li>Develop strong communication and collaboration skills for working with clients, developers, and other
                stakeholders.</li>
            <li>Create a <strong>portfolio</strong> showcasing your web design projects to demonstrate your skills to potential
                employers or clients.</li>
            <li>Understand <strong>copyright</strong>, <strong>intellectual property</strong>, and legal issues related to web
                design. Comply with privacy regulations and standards.</li>
        </ul>`,
      category: 'Designing',
      img: 'https://archaeanpro.in/assets/img/home/web_design.webp',
    },

    {
      id: 2,
      title: 'UI/UX',
      disc: `<ul>
        <li>Understand the principles of <strong>visual design</strong>, including color theory, typography, imagery,
            layout, consistency, and branding.</li>
        <li>Create effective <strong>interactive elements</strong>, such as buttons, forms, navigation menus, and
            microinteractions.</li>
        <li>Familiarize yourself with <strong>UI design tools</strong> and software for designing interfaces and creating
            prototypes.</li>
        <li>Apply essential <strong>design principles</strong>, including affordance, feedback, skeuomorphism vs. flat
            design, and accessibility considerations.</li>
    </ul>
    <h2>User Experience (UX) Design</h2>
    <ul>
        <li>Embrace a <strong>user-centered design</strong> approach by conducting user research, creating personas,
            defining user flows, wireframing, and designing information architecture.</li>
        <li>Conduct <strong>usability testing</strong> using methods such as heuristic evaluation, A/B testing, and
            accessibility testing.</li>
        <li>Utilize various <strong>UX design tools</strong> for research, testing, wireframing, prototyping, and user flow
            diagrams.</li>
        <li>Implement key <strong>UX design principles</strong> related to hierarchy, navigation, and user feedback.</li>
    </ul>`,
      category: 'Designing',
      img: 'https://archaeanpro.in/assets/img/home/uiux.webp',
    },

    {
      id: 3,
      title: 'Web Development',
      disc: `<ul>
        <li>Understand the fundamental concepts of <strong>HTML</strong> (Hypertext Markup Language) and its role in
            structuring web content.</li>
        <li>Learn the basics of <strong>CSS</strong> (Cascading Style Sheets) for controlling the layout and presentation of
            web pages.</li>
        <li>Create well-structured and semantically meaningful <strong>HTML documents</strong>.</li>
        <li>Apply <strong>CSS styles</strong> to control typography, colors, and layouts.</li>
    </ul>
    <h2>Responsive Web Design</h2>
    <ul>
        <li>Comprehend the principles of <strong>responsive web design</strong> to create websites that adapt to different
            screen sizes and devices.</li>
        <li>Utilize <strong>media queries</strong> to design responsive layouts.</li>
        <li>Optimize web content for mobile and touch devices.</li>
    </ul>
    <h2>JavaScript and Front-End Development</h2>
    <ul>
        <li>Learn the <strong>JavaScript programming language</strong> to add interactivity and dynamic functionality to web
            pages.</li>
        <li>Master <strong>DOM manipulation</strong> to modify web page content in real-time.</li>
        <li>Build user interfaces with <strong>HTML, CSS, and JavaScript</strong>.</li>
    </ul>
    <h2>Back-End Development</h2>
    <ul>
        <li>Explore back-end development technologies such as <strong>Node.js</strong>, <strong>Python</strong>, or
            <strong>PHP</strong>.</li>
        <li>Understand the concept of <strong>server-side programming</strong> and data handling.</li>
        <li>Implement <strong>database integration</strong> and create dynamic, data-driven web applications.</li>
    </ul>
    <h2>Version Control and Collaboration</h2>
    <ul>
        <li>Use <strong>version control systems</strong> like <strong>Git</strong> to manage and track changes in web
            development projects.</li>
        <li>Collaborate with other developers through version control platforms and <strong>Git workflows</strong>.</li>
    </ul>
    <h2>Web Performance and Optimization</h2>
    <ul>
        <li>Optimize web pages for fast <strong>loading times</strong> and efficient <strong>performance</strong>.</li>
        <li>Minimize HTTP requests, optimize images, and reduce script execution times.</li>
    </ul>
    <h2>Security and Best Practices</h2>
    <ul>
        <li>Implement <strong>web security best practices</strong> to protect web applications against common threats like
            cross-site scripting (XSS) and SQL injection.</li>
        <li>Adhere to industry standards and practices for <strong>secure web development</strong>.</li>
    </ul>`,
      category: 'Development',
      img: 'https://archaeanpro.in/assets/img/home/web.webp',
    },
  ];
}
