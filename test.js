var assert = require('assert');
var adjust = require('./adjustModel');

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数89)', function(){
            assert.equal(adjust.getAdjustA(89), -1);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数90)', function(){
            assert.equal(adjust.getAdjustA(90), -0.6);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数109)', function(){
            assert.equal(adjust.getAdjustA(109), -0.6);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数110)', function(){
            assert.equal(adjust.getAdjustA(110), -0.3);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数139)', function(){
            assert.equal(adjust.getAdjustA(139), -0.3);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数140)', function(){
            assert.equal(adjust.getAdjustA(140), 0);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数179)', function(){
            assert.equal(adjust.getAdjustA(179), 0);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数180)', function(){
            assert.equal(adjust.getAdjustA(180), 0.2);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数180)', function(){
            assert.equal(adjust.getAdjustA(219), 0.2);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数220)', function(){
            assert.equal(adjust.getAdjustA(220), 0.4);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数220)', function(){
            assert.equal(adjust.getAdjustA(249), 0.4);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数220)', function(){
            assert.equal(adjust.getAdjustA(250), 0.6);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数220)', function(){
            assert.equal(adjust.getAdjustA(299), 0.6);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数220)', function(){
            assert.equal(adjust.getAdjustA(300), 0.8);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数220)', function(){
            assert.equal(adjust.getAdjustA(300), 0.8);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustA', function(){
        it('A表より正しい調節量を得る(引数220)', function(){
            assert.equal(adjust.getAdjustA(350), 1.0);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動-71)', function(){
            assert.equal(adjust.getAdjustB(200, 129), -1.0);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動-70)', function(){
            assert.equal(adjust.getAdjustB(200, 130), -0.8);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動-51)', function(){
            assert.equal(adjust.getAdjustB(200, 149), -0.8);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動-50)', function(){
            assert.equal(adjust.getAdjustB(200, 150), -0.4);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動-31)', function(){
            assert.equal(adjust.getAdjustB(200, 169), -0.4);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動-30)', function(){
            assert.equal(adjust.getAdjustB(200, 170), 0);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動+30)', function(){
            assert.equal(adjust.getAdjustB(200, 230), 0);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動+31)', function(){
            assert.equal(adjust.getAdjustB(200, 231), 0.4);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動+60)', function(){
            assert.equal(adjust.getAdjustB(200, 260), 0.4);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動+61)', function(){
            assert.equal(adjust.getAdjustB(200, 261), 0.6);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動+120)', function(){
            assert.equal(adjust.getAdjustB(200, 320), 0.6);
        });
    });
});

describe('adjustModel', function(){
    describe('getAdjustB', function(){
        it('B表より正しい調節量を得る(変動+121)', function(){
            assert.equal(adjust.getAdjustB(200, 321), 1.0);
        });
    });
});


