const os=require('os');

console.log(os.arch());//x64

console.log(os.platform());//win32

console.log(os.networkInterfaces());

/*
{
  'Wi-Fi': [
    {
      address: '2401:4900:4e03:ee96:6fb8:620f:bb89:3950',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '54:6c:eb:e1:f8:b1',
      internal: false,
      cidr: '2401:4900:4e03:ee96:6fb8:620f:bb89:3950/64',
      scopeid: 0
    },
    {
      address: '2401:4900:4e03:ee96:31d8:bafd:888a:e372',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '54:6c:eb:e1:f8:b1',
      internal: false,
      cidr: '2401:4900:4e03:ee96:31d8:bafd:888a:e372/128',
      scopeid: 0
    },
    {
      address: 'fe80::d903:84af:70b2:5f8f',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '54:6c:eb:e1:f8:b1',
      internal: false,
      cidr: 'fe80::d903:84af:70b2:5f8f/64',
      scopeid: 3
    },
    {
      address: '192.168.117.53',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '54:6c:eb:e1:f8:b1',
      internal: false,
      cidr: '192.168.117.53/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
*/

console.log(os.cpus());

/*
[
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 139265, nice: 0, sys: 195031, idle: 3803687, irq: 5984 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 57296, nice: 0, sys: 67171, idle: 4012968, irq: 2140 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 163234, nice: 0, sys: 185640, idle: 3788546, irq: 5359 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 69281, nice: 0, sys: 70203, idle: 3997937, irq: 2281 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 164796, nice: 0, sys: 201890, idle: 3770734, irq: 7843 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 65312, nice: 0, sys: 75421, idle: 3996687, irq: 2859 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 188531, nice: 0, sys: 258328, idle: 3690562, irq: 23656 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 70453, nice: 0, sys: 106765, idle: 3960203, irq: 9437 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 82312, nice: 0, sys: 97328, idle: 3957750, irq: 3656 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 71171, nice: 0, sys: 64062, idle: 4002140, irq: 2500 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 61625, nice: 0, sys: 46468, idle: 4029281, irq: 2656 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 56984, nice: 0, sys: 38203, idle: 4042187, irq: 2250 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 67140, nice: 0, sys: 56640, idle: 4013593, irq: 4046 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 51750, nice: 0, sys: 36546, idle: 4049062, irq: 2109 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 40171, nice: 0, sys: 25187, idle: 4072000, irq: 1531 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-1240P',
    speed: 2112,
    times: { user: 33843, nice: 0, sys: 28812, idle: 4074703, irq: 2781 }
  }
]
*/

console.log(os.totalmem());//16849293312

console.log(os.freemem());//6260867072
