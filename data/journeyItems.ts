export interface JourneyItem {
  title: {
    en: string;
    tr: string;
  };
  organization: {
    en: string;
    tr: string;
  };
  period: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  }[];
}


export const journeyItems: JourneyItem[] = [
  {
    title: {
      en: "Software Engineer",
      tr: "Yazılım Mühendisi"
    },
    organization: {
      en: "Colin's",
      tr: "Colin's"
    },
    period: {
      en: "2024 - Present",
      tr: "2024 - Halen"
    },
    description: [
      {
        en: "Developing web applications using .NET and MSSQL.",
        tr: "Web uygulamalarının .NET ve MSSQL kullanarak geliştirilmesi."
      },
      {
        en: "Creating responsive and user-friendly interfaces",
        tr: "Responsive ve kullanıcı dostu arayüzlerin oluşturulması."
      },
      {
        en: "Implementing backend solutions with various databases and cloud services",
        tr: "Çeşitli veritabanları ve bulut hizmetleriyle arka uç çözümlerinin uygulanması."
      },
      {
        en: "Collaborating with clients to understand requirements and deliver high-quality solutions",
        tr: "İhtiyaçları anlamak ve yüksek kaliteli çözümler sunmak için müşterilerle işbirliği yapılması."
      }
    ]
  },

  {
    title: {
      en: "Game Developer",
      tr: "Oyun Geliştirici"
    },
    organization: {
      en: "Happy Game Company",
      tr: "Happy Game Company"
    },
    period: {
      en: "2022 - 2023",
      tr: "2022 - 2023"
    },
    description: [
      {
        en: "Developing mobile games using Unity and C#",
        tr: "Unity ve C# kullanarak mobil oyunlar geliştirilmesi."
      },
      {
        en: "Implementing game mechanics and user interfaces",
        tr: "Oyun mekaniklerinin ve kullanıcı arayüzlerinin uygulanması."
      },
      {
        en: "Optimizing game performance for mobile devices",
        tr: "Mobil cihazlarda oyun performansının optimize edilmesi."
      },
      {
        en: "Publishing games to app stores and maintaining them",
        tr: "Oyunların uygulama mağazalarına yayınlanması ve sürdürülmesi."
      }
    ]
  },

  {
    title: {
      en: "Software Engineering Student",
      tr: "Yazılım Mühendisliği Öğrencisi"
    },
    organization: {
      en: "Izmir University of Economics",
      tr: "İzmir Ekonomi Üniversitesi"
    },
    period: {
      en: "2019 - 2023",
      tr: "2019 - 2023"
    },
    description: [
      {
        en: "Studied computer science and software engineering principles",
        tr: "Bilgisayar bilimi ve yazılım mühendisliği prensiplerini öğrendim."
      },
      {
        en: "Completed various projects in different programming languages",
        tr: "Farklı programlama dillerinde çeşitli projeler tamamladım."
      },
      {
        en: "Participated in team projects",
        tr: "Ekip projelerine katıldım."
      },
      {
        en: "Graduated with honors",
        tr: "Başarıyla mezun oldum."
      }
    ]
  }

]