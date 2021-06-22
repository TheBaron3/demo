import Home from '../pages/Home'
import Team from '../pages/Team'
import Papers from '../pages/Papers'
import Tools from '../pages/Tools'
import News from '../pages/News'

export const links = [
    { id: '001', name: '首页', path: '/home' },
    { id: '002', name: '科研团队', path: '/team' },
    { id: '003', name: '发表文章', path: '/papers' },
    { id: '004', name: '开源工具', path: '/tools' },
    { id: '005', name: '最近新闻', path: '/news' }
]

export const routes = [
    { id: '001', path: '/home', component: Home },
    { id: '002', path: '/team', component: Team },
    { id: '003', path: '/papers', component: Papers },
    { id: '004', path: '/tools', component: Tools },
    { id: '005', path: '/news', component: News }
]

export const teamLeaders = [
    { id: '001', name: '李建欣', position: '教授，博士生导师', work: '研究方向为大数据分析与处理、机器学习和可信计算等' },
    { id: '002', name: '周号益', position: '助理教授', work: '研究方向为时序预测，安全可信赖的深度学习等' }
]

export const teamEvents = [
    { id: '001', name: '工作交流会' },
    { id: '002', name: '团队建设' },
    { id: '003', name: '论文分享' },
    { id: '004', name: '年会留念' }
]

export const studyFields = [
    { id: '001', name: '时序预测', info: '时空序列预测（Spatiotemporal Sequence Forecasting）问题，是数据挖掘领域长期存在尚未得到有效解决的问题。主要分为Grid和Graph两种建模方式。' },
    { id: '002', name: '智能决策', info: '高维离散环境决策优化问题，是在现实环境中有效开展复杂决策的重要问题。在多数实际场景中，决策环境呈现高维度、大规模、强稀疏、难观测、难模拟等典型特征。如何精确建模表示复杂环境的状态、提升模型在大规模离散动作空间的泛化性是解决复杂环境下时序决策的重要挑战。' },
    { id: '003', name: '安全计算', info: '安全、可靠的预训练和自适应。' },
]

export const coWorkers = [
    { id: '001', name: 'UC Berkeley' },
    { id: '002', name: 'Rutgers' },
    { id: '003', name: 'UC SanDiego' },
    { id: '004', name: 'MSRA' },
    { id: '005', name: '国家电网' },
    { id: '006', name: '华为' },
    { id: '007', name: '东方航空' }
]

export const phdStudents = [
    { id: '001', name: "张扬扬", avator: '张扬扬.png', year: "2014", major: "分布式系统、机器学习、图计算", link: "" },
    { id: '002', name: "张帅", avator: '张帅.jpeg', year: "2016", major: "时序数据表征", link: "https://shuaibuaa.github.io/" },
    { id: '003', name: "晏梦懿", avator: '晏梦懿1.jpg', year: "2017", major: "图数据异常检测", link: "https://github.com/authurlord" },
    { id: '004', name: "朱天晨", avator: '朱天晨.jpeg', year: "2018", major: "时序决策、图强化学习", link: '' },
    { id: '005', name: "袁子琪", avator: '袁子琪.jpeg', year: "2019", major: "图数据异常检测", link: '' },
    { id: '006', name: "于金泽", avator: '于金泽.png', year: "2020", major: "医学图像处理，表征学习", link: '' },
    { id: '007', name: "陈天宇", avator: '陈天宇.png', year: "2020", major: "深度学习模型的安全迁移", link: "https://tarpelite.github.io/" },
    { id: '008', name: "刘阳", avator: '刘阳.jpeg', year: "2021", major: "分布式系统、机器学习系统优化", link: '' }
]

export const masterStudents = [
    { id: '001', name: "王栋", avator: '王栋.jpeg', year: "2019", major: "排序列表截断", link: "" },
    { id: '002', name: "范才金", avator: '范才金.png', year: "2019", major: "小目标检测", link: "" },
    { id: '003', name: "彭杰奇", avator: '彭杰奇.jpeg', year: "2019", major: "时间序列分析预测", link: "https://cookieminions.github.io/" },
    { id: '004', name: "朱琪山", avator: '朱琪山.jpeg', year: "2020", major: "时序数据表征", link: "" },
    { id: '005', name: "何铭睿", avator: '何铭睿.jpeg', year: "2020", major: "深度学习模型的安全迁移", link: "" },
    { id: '006', name: "刘瀚骋", avator: '刘瀚骋.jpeg', year: "2020", major: "计算机网络，数据库，FPGA异构计算", link: "" },
    { id: '007', name: "姜春阳", avator: '姜春阳.png', year: "2021", major: "强化学习，时序决策", link: "" },
    { id: '008', name: "肖思炀", avator: '肖思炀.jpeg', year: "2021", major: "时序预测，强化学习", link: "" }
]

export const papers = [
    {id :'001',
    title:"Informer: Beyond Efficient Transformer for Long Sequence Time-Series Forecasting",
    conference:"AAAI 2021 (Best Paper)",
    authors:"Haoyi Zhou, Shanghang Zhang, Jieqi Peng, Shuai Zhang, Jianxin Li, Hui Xiong, Wancai Zhang",
    link:"https://arxiv.org/abs/2012.07436",
    code_url:"https://github.com/zhouhaoyi/Informer2020"},
    {id :'001',
    title:"Informer: Beyond Efficient Transformer for Long Sequence Time-Series Forecasting",
    conference:"AAAI 2021 (Best Paper)",
    authors:"Haoyi Zhou, Shanghang Zhang, Jieqi Peng, Shuai Zhang, Jianxin Li, Hui Xiong, Wancai Zhang",
    link:"https://arxiv.org/abs/2012.07436",
    code_url:"https://github.com/zhouhaoyi/Informer2020"},
]
