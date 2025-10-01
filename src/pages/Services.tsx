import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Settings, Headphones, Globe, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "APK应用开发",
      description: "专业的Android应用开发服务，从需求分析到上线运营全流程支持。",
      features: ["原生Android开发", "跨平台开发", "UI/UX设计", "应用商店发布"],
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "网站开发",
      description: "响应式网站设计与开发，为您打造专业的线上品牌形象。",
      features: ["响应式设计", "SEO优化", "内容管理系统", "电子商务解决方案"],
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "定制开发",
      description: "根据您的业务需求，提供完全定制化的软件开发服务。",
      features: ["需求分析", "系统设计", "敏捷开发", "质量保证"],
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "应用维护",
      description: "7×24小时技术支持，确保您的应用稳定运行。",
      features: ["bug修复", "性能优化", "安全更新", "功能升级"],
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "后端开发",
      description: "可靠的后端系统开发，为您的应用提供强大的技术支撑。",
      features: ["API开发", "数据库设计", "云服务部署", "性能优化"],
    },
    {
      icon: <Headphones className="h-12 w-12 text-primary" />,
      title: "技术咨询",
      description: "专业的技术顾问团队，为您的项目提供全方位的技术建议。",
      features: ["技术选型", "架构设计", "团队培训", "项目管理"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">专业技术服务</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              一站式开发与维护解决方案，助力您的业务快速发展
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">准备开始您的项目了吗？</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              我们的专业团队随时为您服务，立即联系我们获取免费咨询。
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary">
                立即咨询
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
