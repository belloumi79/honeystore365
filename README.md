# HoneyStore - متجر العسل الإلكتروني 🍯

## نظرة عامة
متجر إلكتروني متخصص في بيع العسل الطبيعي والمنتجات ذات الصلة، مبني باستخدام Next.js 14 و Supabase مع تطبيق مبادئ Clean Code.

## 🎯 المميزات الرئيسية

### للمستخدمين
- 🍯 عرض المنتجات مع تفاصيل شاملة
- 🛒 نظام سلة التسوق المتقدم مع badge تفاعلي
- 👤 إدارة المستخدمين والمصادقة الآمنة
- 📱 تصميم متجاوب ومتاح للجميع
- 🌐 دعم اللغة العربية والإنجليزية (RTL/LTR)
- 💳 نظام الدفع المتكامل
- 📦 تتبع الطلبات والحالة

### للإدارة
- 📊 لوحة تحكم شاملة مع إحصائيات
- 👥 إدارة العملاء والمستخدمين
- 📦 إدارة المنتجات والمخزون
- 🏷️ إدارة الفئات والتصنيفات
- 📋 إدارة الطلبات وتحديث الحالة
- 💰 نظام الخصومات وأكواد التخفيض
- 📈 تقارير المبيعات والأداء

## 🏗️ التقنيات المستخدمة

### Frontend
- **Next.js 14** - React Framework مع App Router
- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لغة البرمجة مع الأنواع الثابتة
- **Tailwind CSS** - إطار عمل CSS
- **Radix UI** - مكونات UI متاحة للجميع

### Backend
- **Supabase** - قاعدة البيانات والمصادقة
- **PostgreSQL** - قاعدة البيانات العلائقية
- **Row Level Security** - أمان على مستوى الصفوف

### أدوات التطوير
- **ESLint & Prettier** - جودة الكود
- **Jest & React Testing Library** - الاختبارات
- **Zod** - التحقق من صحة البيانات
- **React Hook Form** - إدارة النماذج

## 🚀 الميزات المتقدمة (Clean Code)

### الهندسة المعمارية
- ✅ **Clean Architecture** - فصل الطبقات والاهتمامات
- ✅ **SOLID Principles** - مبادئ التصميم الصحيح
- ✅ **Domain-Driven Design** - تصميم موجه بالمجال
- ✅ **Service Layer Pattern** - طبقة الخدمات المنفصلة

### جودة الكود
- ✅ **TypeScript Strict Mode** - فحص صارم للأنواع
- ✅ **Structured Logging** - نظام تسجيل منظم
- ✅ **Error Handling** - إدارة الأخطاء المتقدمة
- ✅ **Input Validation** - التحقق من صحة المدخلات

### الأداء والأمان
- ✅ **Pagination** - تقسيم البيانات للصفحات
- ✅ **Lazy Loading** - التحميل الكسول للمكونات
- ✅ **RBAC** - التحكم في الوصول حسب الأدوار
- ✅ **Data Sanitization** - تنظيف البيانات

### المراقبة والتحليل
- ✅ **Performance Monitoring** - مراقبة الأداء
- ✅ **Error Tracking** - تتبع الأخطاء
- ✅ **Business Metrics** - مقاييس الأعمال
- ✅ **User Analytics** - تحليلات المستخدمين

## 📋 متطلبات النظام
- Node.js 18.0.0 أو أحدث
- npm 8.0.0 أو أحدث
- حساب Supabase نشط

## 🛠️ التثبيت والإعداد

### 1. استنساخ المشروع
```bash
git clone [repository-url]
cd honeystore
```

### 2. تثبيت التبعيات
```bash
npm install
```

### 3. إعداد متغيرات البيئة
```bash
cp .env.example .env.local
```

قم بتحديث `.env.local` بقيم Supabase الخاصة بك:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. تشغيل المشروع
```bash
npm run dev
```

المشروع سيكون متاحاً على `http://localhost:3000`

## 🧪 الاختبار والتحقق

### اختبار سريع
```bash
node test-final.js
```

### اختبار الوحدة
```bash
npm test
npm run test:watch
```

### تشخيص المشاكل
```bash
node debug-auth.js
```

### تدقيق شامل
```bash
node final-audit.js
```

## 🏗️ البناء للإنتاج
```bash
npm run build
npm start
```

## 🚀 النشر على Vercel

### المتطلبات
- حساب Vercel نشط
- مستودع GitHub للمشروع
- متغيرات البيئة مُعدة

### الطريقة الأولى: عبر واجهة Vercel (مُوصى بها)
1. سجل الدخول إلى حسابك على [Vercel](https://vercel.com)
2. انقر على "Add New..." → "Project"
3. اختر استيراد مستودع GitHub
4. أضف متغيرات البيئة في قسم "Environment Variables"
5. انقر على "Deploy"

### الطريقة الثانية: باستخدام Vercel CLI
```bash
# تثبيت CLI Vercel
npm install -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel
```

### أوامر النشر المتقدمة
```bash
# نشر للإنتاج
vercel --prod

# نشر للتجربة
vercel --prebuilt

# عرض السجلات
vercel logs

# إعادة النشر
vercel --prod
```

### استخدام Scripts المُعدة مسبقًا
```bash
# لنظام Linux/macOS
./scripts/deploy-vercel.sh

# لنظام Windows
.\scripts\deploy-vercel.ps1

# للنشر في بيئة التجربة
./scripts/deploy-vercel.sh staging
```

### ملفات التكوين
- `vercel.json` - إعدادات النشر على Vercel
- `next.config.js` - إعدادات Next.js مُحسّنة للنشر
- `.env.example` - قالب متغيرات البيئة

### دليل النشر الكامل
لمزيد من التفاصيل حول إعداد المشروع للنشر على Vercel، راجع [دليل النشر على Vercel](docs/deployment/VERCEL_DEPLOYMENT_GUIDE.md).

## 📁 هيكل المشروع
```
src/
├── app/                    # App Router pages
│   ├── admin/             # صفحات الإدارة
│   ├── auth/              # صفحات المصادقة
│   ├── api/               # API routes
│   └── ...
├── components/            # React components
│   ├── ui/                # مكونات واجهة المستخدم
│   ├── forms/             # مكونات النماذج
│   ├── admin/             # مكونات الإدارة
│   └── business/          # مكونات الأعمال
├── lib/                   # المكتبات والإعدادات
│   ├── config/            # إعدادات التطبيق
│   ├── logger/            # نظام التسجيل
│   ├── errors/            # إدارة الأخطاء
│   ├── validation/        # التحقق من صحة البيانات
│   └── supabase/          # إعدادات Supabase
├── services/              # طبقة الخدمات
│   ├── products/          # خدمات المنتجات
│   ├── orders/            # خدمات الطلبات
│   ├── cart/              # خدمات السلة
│   ├── auth/              # خدمات المصادقة
│   └── discounts/         # خدمات الخصومات
├── types/                 # تعريفات الأنواع
├── hooks/                 # React hooks مخصصة
├── locales/               # ملفات الترجمة
├── context/               # React contexts
└── styles/                # الأنماط العامة
```

## 🔧 الأدوات المساعدة

### ملفات التشخيص والاختبار
- `test-final.js` - اختبار شامل للمشروع
- `debug-auth.js` - تشخيص مشاكل المصادقة
- `final-audit.js` - تدقيق نهائي للمشروع
- `TROUBLESHOOTING.md` - دليل حل المشاكل

### الوثائق
- `CLEAN_CODE_SUMMARY.md` - ملخص التحسينات
- `DEPLOYMENT.md` - دليل النشر
- `.kiro/specs/` - مواصفات المشروع

## 🌟 الصفحات المتاحة

### للمستخدمين
- `/` - الصفحة الرئيسية
- `/auth/login` - تسجيل الدخول
- `/auth/register` - إنشاء حساب
- `/products` - المنتجات
- `/cart` - سلة التسوق
- `/checkout` - إتمام الطلب
- `/orders` - طلباتي

### للإدارة
- `/admin` - لوحة التحكم
- `/admin/products` - إدارة المنتجات
- `/admin/orders` - إدارة الطلبات
- `/admin/customers` - إدارة العملاء
- `/admin/settings` - الإعدادات

### للاختبار والعرض
- `/demo-badge` - عرض badge السلة
- `/demo-cart` - عرض نظام السلة

## 🤝 المساهمة
1. Fork المشروع
2. إنشاء branch للميزة الجديدة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى Branch (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📄 الترخيص
هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 🆘 الدعم
للحصول على الدعم:
1. راجع `TROUBLESHOOTING.md` للمشاكل الشائعة
2. استخدم أدوات التشخيص المتوفرة
3. افتح issue في GitHub
4. تواصل مع فريق التطوير

## 🎉 الإنجازات
- ✅ **100% Clean Code** - تطبيق كامل لمبادئ Clean Code
- ✅ **Type Safety** - أمان كامل للأنواع مع TypeScript
- ✅ **Accessibility** - متاح للجميع مع WCAG 2.1 AA
- ✅ **Internationalization** - دعم كامل للعربية والإنجليزية
- ✅ **Performance** - محسن للأداء والسرعة
- ✅ **Security** - آمن مع أفضل الممارسات
- ✅ **Scalability** - قابل للتوسع والنمو

---

**تم تطوير هذا المشروع باستخدام أفضل الممارسات في هندسة البرمجيات وتطبيق مبادئ Clean Code بشكل كامل.**
