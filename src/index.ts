import { Context, Schema } from 'koishi'

export const name = 'bless'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // on enable
  ctx.logger('bless').info(`
  *......................我佛保佑......................
  *
  *                      _oo0oo_  
  *                     o8888888o 
  *                     88" . "88 
  *                     (| -_- |) 
  *                     0\\  =  /0
  *                   ___/‘---’\\___
  *                 .' \\\\|     |<p>## '.
  *               / \\\\|||  :  |||<p>## \\
  *               / _||||| -卍-|||||- \\
  *              |   | \\\\\\  -  <p>##/ |   |
  *              | \\_|  ''\\---/''  |_/ |
  *              \\  .-\\__  '-'  ___/-. /
  *             ___'. .'  /--.--\\  '. .'___
  *            ."" ‘<  ‘.___\\_<|>_/___.’>’ "".
  *         | | :  ‘- \\‘.;‘\\ _ /’;.’/ - ’ : | |
  *        \\  \\ ‘_.   \\_ __\\ /__ _/   .-’ /  /
  *         ‘-.____‘.___ \\_____/___.-’___.-’
  * 
  *......................Koishi不崩......................`)

  // on disable
  ctx.on('dispose', () => {
    ctx.logger('bless').info(`
#                        ____________
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#  _____________________|            |_____________________
# |                                                        |
# |                                                        |
# |                                                        |
# |_____________________              _____________________|
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |            |
#                       |____________|

# 耶和華是我的牧者，我必不致缺乏。
# 他使我躺臥在青草地上，領我在可安歇的水邊。
# 他使我的靈魂甦醒，為自己的名引導我走義路。
# 我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在；你的杖，你的竿，都安慰我。
# 在我敵人面前，你為我擺設筵席；你用油膏了我的頭，使我的福杯滿溢。
# 我一生一世必有恩惠慈愛隨著我；我且要住在耶和華的殿中，直到永遠。
# - 詩篇 23篇`)
  })
}
