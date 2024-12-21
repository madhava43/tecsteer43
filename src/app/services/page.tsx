import styles from "../styles/Services.module.css";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Mobile Development",
      description: "Build cutting-edge mobile applications for iOS and Android.",
      icon: "/icons/mobile.png", // Add an icon image in the public folder
      link: "/services/mobile-development",
    },
    {
      title: "Cloud Services",
      description: "Leverage the power of cloud computing for scalability.",
      icon: "/icons/cloud.png",
      link: "/services/cloud-services",
    },
    {
      title: "Application Services",
      description: "Streamline your operations with custom application solutions.",
      icon: "/icons/application.png",
      link: "/services/application-services",
    },
    {
      title: "AWS Consulting",
      description: "Get expert advice on AWS architecture and services.",
      icon: "/icons/aws.png",
      link: "/services/aws-consulting",
    },
    {
      title: "Web Development",
      description: "Build responsive, fast, and secure web applications.",
      icon: "/icons/web.png",
      link: "/services/web-development",
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive user interfaces for better user experiences.",
      icon: "/icons/uiux.png",
      link: "/services/ui-ux-design",
    },
    {
      title: "Data Analytics",
      description: "Unlock insights with data visualization and analytics.",
      icon: "/icons/data.png",
      link: "/services/data-analytics",
    },
    {
      title: "Cybersecurity",
      description: "Protect your systems with advanced cybersecurity solutions.",
      icon: "/icons/security.png",
      link: "/services/cybersecurity",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Services</h1>
      <p className={styles.description}>
        Explore the range of services we offer to help your business thrive.
      </p>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}
