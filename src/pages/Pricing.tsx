import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "基础版",
      price: "¥8,888",
      period: "起",
      description: "适合个人和小型项目",
      features: [
        "基础功能开发",
        "响应式设计",
        "3个月免费维护",
        "基础技术支持",
        "源代码交付",
        "文档说明",
      ],
      highlighted: false,
    },
    {
      name: "专业版",
      price: "¥28,888",
      period: "起",
      description: "适合中小企业",
      features: [
        "包含基础版所有功能",
        "高级功能定制",
        "UI/UX专业设计",
        "6个月免费维护",
        "优先技术支持",
        "性能优化",
        "SEO优化",
        "数据分析集成",
      ],
      highlighted: true,
    },
    {
      name: "企业版",
      price: "面议",
      period: "",
      description: "适合大型企业和复杂项目",
      features: [
        "包含专业版所有功能",
        "完全定制化开发",
        "专属项目经理",
        "12个月免费维护",
        "7×24小时技术支持",
        "高级安全保障",
        "云服务器部署",
        "持续优化升级",
        "培训服务",
      ],
      highlighted: false,
    },
  ];

  const maintenanceServices = [
    {
      name: "基础维护",
      price: "¥1,888",
      period: "/月",
      features: [
        "Bug修复",
        "安全更新",
        "性能监控",
        "工作日技术支持",
      ],
    },
    {
      name: "高级维护",
      price: "¥3,888",
      period: "/月",
      features: [
        "包含基础维护所有服务",
        "功能更新",
        "数据备份",
        "7×24小时技术支持",
        "优先响应",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">价格方案</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              选择最适合您的方案，开始您的项目
            </p>
          </div>
        </section>

        {/* Development Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">开发服务价格</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`shadow-card ${
                    plan.highlighted ? "border-primary shadow-glow" : ""
                  }`}
                >
                  <CardHeader>
                    {plan.highlighted && (
                      <div className="text-xs font-semibold text-primary mb-2">最受欢迎</div>
                    )}
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground ml-2">{plan.period}</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button
                        className={`w-full ${
                          plan.highlighted ? "gradient-primary" : ""
                        }`}
                        variant={plan.highlighted ? "default" : "outline"}
                      >
                        立即咨询
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Services */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">维护服务价格</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {maintenanceServices.map((service, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{service.price}</span>
                      <span className="text-muted-foreground ml-2">{service.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className="w-full" variant="outline">
                        了解详情
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">开发周期需要多久？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    开发周期根据项目复杂度而定，一般基础项目需要1-2个月，中等复杂度项目需要2-4个月，
                    大型项目可能需要4-6个月或更长。具体时间会在需求分析后确定。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">是否提供后续技术支持？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    我们为所有项目提供免费维护期，期间包括bug修复和技术支持。
                    维护期结束后，您可以选择继续购买维护服务。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">如何保证项目质量？</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    我们采用严格的质量管理流程，包括代码审查、自动化测试、用户测试等环节。
                    每个项目都会经过多轮测试确保质量达标后才交付。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
