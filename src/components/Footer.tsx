import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const services = [
    { path: "/services", label: "APP开发" },
    { path: "/services", label: "网站开发" },
    { path: "/services", label: "维护服务" },
    { path: "/services", label: "技术咨询" },
  ];

  const company = [
    { path: "/about", label: "关于我们" },
    { path: "/portfolio", label: "成功案例" },
    { path: "/pricing", label: "价格方案" },
    { path: "/contact", label: "联系我们" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src="/favicon.svg" alt="云码科技" className="h-8 w-8" />
              <span className="text-lg font-bold">云码科技</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              专业的APP开发与维护服务商，为您提供一站式技术解决方案。
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">公司信息</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+86 400-888-8888</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contact@yunmatech.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>中国 深圳市</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 云码科技. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
