import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Settings, TrendingUp, Shield, Zap } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "移动应用开发",
      description: "专业的Android和iOS应用开发，打造流畅的移动体验。",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "网站开发",
      description: "响应式网站设计与开发，提升您的线上品牌形象。",
    },
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "维护服务",
      description: "7×24小时技术支持，确保您的应用稳定运行。",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: "性能优化",
      description: "持续优化应用性能，提升用户体验和转化率。",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "安全保障",
      description: "企业级安全防护，保护您的数据和用户隐私。",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "快速交付",
      description: "敏捷开发流程，确保项目按时高质量交付。",
    },
  ];

  const stats = [
    { number: "500+", label: "完成项目" },
    { number: "200+", label: "合作客户" },
    { number: "50+", label: "专业团队" },
    { number: "99%", label: "满意度" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
                专业的APP开发与维护服务
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                为您提供从设计到开发，从部署到维护的一站式技术解决方案
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="gradient-primary shadow-glow">
                    免费咨询
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline">
                    了解服务
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">核心服务</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                我们提供全方位的技术服务，助力您的业务发展
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">为什么选择我们</h2>
              <p className="text-muted-foreground mb-12">
                我们专注于为客户提供最优质的软件开发和维护服务
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2 text-lg">专业团队</h3>
                    <p className="text-muted-foreground">
                      由资深开发工程师和设计师组成的专业团队，拥有丰富的项目经验。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2 text-lg">质量保证</h3>
                    <p className="text-muted-foreground">
                      严格的质量管理流程，确保每个项目都达到最高标准。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2 text-lg">持续支持</h3>
                    <p className="text-muted-foreground">
                      提供长期技术支持和维护服务，让您无后顾之忧。
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2 text-lg">合理价格</h3>
                    <p className="text-muted-foreground">
                      根据项目需求提供灵活的价格方案，性价比高。
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center gradient-primary rounded-2xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                准备开始您的项目了吗？
              </h2>
              <p className="text-lg mb-8 opacity-90">
                立即联系我们，获取专业的技术咨询和项目报价
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary">
                    免费咨询
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    查看价格
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
