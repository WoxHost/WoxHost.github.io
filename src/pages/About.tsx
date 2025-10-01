import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "完成项目" },
    { number: "200+", label: "合作客户" },
    { number: "50+", label: "专业团队" },
    { number: "99%", label: "客户满意度" },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "专注专业",
      description: "专注于移动应用和网站开发，为客户提供最专业的技术服务。",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "客户至上",
      description: "以客户需求为导向，提供个性化的解决方案和贴心的服务。",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "品质保证",
      description: "严格的质量管理体系，确保每个项目都达到最高标准。",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "创新驱动",
      description: "持续学习最新技术，为客户提供前沿的技术解决方案。",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">关于云码科技</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              致力于为客户提供最优质的软件开发和维护服务
            </p>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">公司简介</h2>
              <p className="text-muted-foreground mb-6">
                云码科技成立于2018年，是一家专注于移动应用开发和网站建设的技术服务公司。我们拥有一支经验丰富的开发团队，
                为全球客户提供从需求分析、设计开发到运营维护的全方位技术服务。
              </p>
              <p className="text-muted-foreground">
                多年来，我们已经成功为200多家企业提供了专业的技术解决方案，涵盖电商、教育、医疗、金融等多个行业。
                我们始终坚持以客户需求为导向，用专业的技术和优质的服务赢得客户的信任。
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">核心价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">专业团队</h2>
              <p className="text-muted-foreground mb-8">
                我们的团队由资深的开发工程师、设计师和项目经理组成，每个成员都在各自领域拥有丰富的经验。
                我们注重团队协作，采用敏捷开发模式，确保项目高效、高质量地交付。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold mb-2">开发团队</h3>
                    <p className="text-sm text-muted-foreground">
                      精通各种主流开发技术，经验丰富的工程师团队
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold mb-2">设计团队</h3>
                    <p className="text-sm text-muted-foreground">
                      追求极致用户体验的UI/UX设计师
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold mb-2">服务团队</h3>
                    <p className="text-sm text-muted-foreground">
                      7×24小时在线的技术支持和客户服务
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
