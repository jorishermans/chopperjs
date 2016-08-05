import {SimpleDevice} from '../lib/simple_device'
import assert from 'assert'

describe('basic tests', () => {
  it("should parse user agent and say it is a tablet device", () => {
    let sd = new SimpleDevice("Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10");

    assert.equal(sd.isMobile(),false,"is mobile?");
    assert.equal(sd.isTablet(),true,"is tablet?");
    assert.equal(sd.isDesktop(),false,"is desktop?");
  })

  it("should parse user agent and say it is a mobile device", () => {
    let sd = new SimpleDevice();
    sd.newUserAgent("Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7");

    assert.equal(sd.isMobile(),true,"is mobile?");
    assert.equal(sd.isTablet(),false,"is tablet?");
    assert.equal(sd.isDesktop(),false,"is desktop?");
  })

  it("should parse user agent and say it is a desktop device", () => {
    let sd = new SimpleDevice();
    sd.newUserAgent("// Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36");

    assert.equal(sd.isMobile(),false,"is mobile?");
    assert.equal(sd.isTablet(),false,"is tablet?");
    assert.equal(sd.isDesktop(),true,"is desktop?");
  })
});
