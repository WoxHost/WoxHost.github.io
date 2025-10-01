import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "智慧零售APP",
      category: "电商",
      description: "为连锁零售企业开发的移动端管理系统，实现了库存管理、订单处理、数据分析等功能。",
      tags: ["Android", "iOS", "后端开发"],
      stats: { users: "10万+", rating: "4.8" },
    },
    {
      title: "在线教育平台",
      category: "教育",
      description: "综合性在线学习平台，包含直播授课、课程管理、学习跟踪等核心功能。",
      tags: ["Web开发", "视频直播", "云服务"],
      stats: { users: "50万+", rating: "4.9" },
    },
    {
      title: "健康管理APP",
      category: "医疗",
      description: "个人健康数据管理应用，提供运动记录、饮食跟踪、健康建议等服务。",
      tags: ["移动开发", "数据分析", "AI"],
      stats: { users: "20万+", rating: "4.7" },
    },
    {
      title: "企业官网开发",
      category: "企业服务",
      description: "为大型企业设计开发的响应式官方网站，展示企业形象和产品服务。",
      tags: ["Web设计", "SEO优化", "CMS"],
      stats: { users: "100万+", rating: "4.9" },
    },
    {
      title: "社交分享平台",
      category: "社交",
      description: "图片和视频分享社交应用，支持实时互动、内容推荐等功能。",
      tags: ["Android", "iOS", "实时通讯"],
      stats: { users: "30万+", rating: "4.6" },
    },
    {
      title: "智能家居控制",
      category: "IoT",
      description: "智能家居设备控制APP，实现远程控制、场景联动、语音控制等功能。",
      tags: ["IoT", "移动开发", "云平台"],
      stats: { users: "15万+", rating: "4.8" },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">成功案例</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              我们为各行业客户提供了优质的技术解决方案
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>⭐ {project.stats.rating}</span>
                        <span>{project.stats.users}</span>
                      </div>
                    </div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">客户评价</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    "云码科技的团队非常专业，开发效率高，产品质量好。项目按时交付，后期维护也很及时。"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <div className="font-semibold">张总</div>
                      <div className="text-sm text-muted-foreground">某电商企业</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    "合作很愉快，技术团队经验丰富，能够快速理解我们的需求并提供专业的解决方案。"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <div className="font-semibold">李经理</div>
                      <div className="text-sm text-muted-foreground">教育科技公司</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    "从设计到开发，整个流程都非常专业。产品上线后用户反馈很好，大大提升了我们的业务效率。"
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary/20" />
                    <div>
                      <div className="font-semibold">王总监</div>
                      <div className="text-sm text-muted-foreground">医疗健康企业</div>
                    </div>
                  </div>
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

export default Portfolio;
