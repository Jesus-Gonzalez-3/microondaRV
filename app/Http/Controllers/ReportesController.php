<?php

namespace App\Http\Controllers;

use App\Models\VentasReportesModel;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Null_;
use PhpParser\Node\Expr\Cast\Array_;

class ReportesController extends Controller
{
    /* 
    public function GetAll()
    {
        $ventas = VentasReportesModel::where('documento', '=', 'Factura Directa')
            ->limit(4200)
            ->get();
        return view('reportes.reporteAll', compact('ventas'));
    }

    public function ReporteVentasUnidadGrafica()
    {
        $data = [];
        $data['producto'] = VentasReportesModel::select('desc_producto', DB::raw('sum(cantidad_unidades) as cantidad_unidades'))
            ->where('documento', '=', 'Factura Directa')
            ->groupBy('desc_producto')
            ->orderBy('cantidad_unidades', 'Asc')
            ->limit(50)
            ->get();

        return $data;
    } */

    public function ObtenerTop20(Request $request)
    {
        try {
            $data = [];
            $data_result = DB::select("CALL GET_TOP20_VENTAS_SEMANAL_OTRAS(" . $request->semana . ")");
            if (sizeof($data_result) != 0) {
                for ($i = 0; $i < sizeof($data_result); $i++) {
                    $result_annio1 = DB::select("CALL GET_VENTAS_SEMANAL_2020_OTRAS(" . $request->semana . ", '" . $data_result[$i]->CLAVE . "')");
                    $result_annio2 = DB::select("CALL GET_VENTAS_SEMANAL_2021_OTRAS(" . $request->semana . ", '" . $data_result[$i]->CLAVE . "')");
                    $result_annio3 = DB::select("CALL GET_VENTAS_SEMANAL_2022_OTRAS(" . $request->semana . ", '" . $data_result[$i]->CLAVE . "')");
                    $unidades_annio1 = 0;
                    $unidades_annio2 = 0;
                    $unidades_annio3 = 0;
                    $importe_annio1 = 0;
                    $importe_annio2 = 0;
                    $importe_annio3 = 0;
                    $ordenacion = $data_result[$i]->IMPORTE;
                    $unidades_actual = number_format(round($data_result[$i]->UNIDADES, 2), 2);
                    $importe_actual = number_format(round($data_result[$i]->IMPORTE, 2), 2);
                    $clave = $data_result[$i]->CLAVE;
                    $cliente = $data_result[$i]->CLIENTE;
                    if (isset($result_annio1)) {
                        if (isset($result_annio2)) {
                            if (isset($result_annio3)) {
                                foreach ($result_annio1 as $venta) {
                                    $unidades_annio1 = $venta->Unidades;
                                    $importe_annio1 = $venta->IMPORTE;
                                }

                                foreach ($result_annio2 as $venta2) {
                                    $unidades_annio2 = $venta2->Unidades;
                                    $importe_annio2 = $venta2->IMPORTE;
                                }

                                foreach ($result_annio3 as $venta3) {
                                    $unidades_annio3 = $venta3->Unidades;
                                    $importe_annio3 = $venta3->IMPORTE;
                                }
                            }
                        }
                    }

                    $objeto = array(
                        "ORDEN" => $ordenacion,
                        "CLAVE" => $clave,
                        "CLIENTE" => $cliente,
                        "UNIDADES_ANNIO1" => $unidades_annio1,
                        "UNIDADES_ANNIO2" => $unidades_annio2,
                        "UNIDADES_ANNIO3" => $unidades_annio3,
                        "UNIDADES_ACTUALES" => $unidades_actual,
                        "IMPORTE_ANNIO1" => $importe_annio1,
                        "IMPORTE_ANNIO2" => $importe_annio2,
                        "IMPORTE_ANNIO3" => $importe_annio3,
                        "IMPORTE_ACTUAL" => $importe_actual
                    );
                    array_push($data, $objeto);
                }
                return $data;
            } else {
                return "ERROR1¬No se encuentra información disponible para la semana seleccionada";
            }
        } catch (Exception $err) {
            return "ERROR ¬" . $err;
        }
    }

    public function ObtenerTop50(Request $request)
    {
        try {
            $data = [];
            $data_result = DB::select("CALL GET_TOP50_VENTAS_SEMANAL(" . $request->semana . ")");
            if (sizeof($data_result) != 0) {
                for ($i = 0; $i < sizeof($data_result); $i++) {
                    $result_annio1 = DB::select("CALL GET_VENTAS_SEMANAL_2020(" . $request->semana . ", '" . $data_result[$i]->CLAVE . "')");
                    $result_annio2 = DB::select("CALL GET_VENTAS_SEMANAL_2021(" . $request->semana . ", '" . $data_result[$i]->CLAVE . "')");
                    $result_annio3 = DB::select("CALL GET_VENTAS_SEMANAL_2022(" . $request->semana . ", '" . $data_result[$i]->CLAVE . "')");
                    $unidades_annio1 = 0;
                    $unidades_annio2 = 0;
                    $unidades_annio3 = 0;
                    $importe_annio1 = 0;
                    $importe_annio2 = 0;
                    $importe_annio3 = 0;
                    $ordenacion = $data_result[$i]->IMPORTE;
                    $unidades_actual = number_format(round($data_result[$i]->UNIDADES, 2), 2);
                    $importe_actual = number_format(round($data_result[$i]->IMPORTE, 2), 2);
                    $clave = $data_result[$i]->CLAVE;
                    $cliente = $data_result[$i]->CLIENTE;
                    if (isset($result_annio1)) {
                        if (isset($result_annio2)) {
                            if (isset($result_annio3)) {
                                foreach ($result_annio1 as $venta) {
                                    $unidades_annio1 = $venta->Unidades;
                                    $importe_annio1 = $venta->IMPORTE;
                                }

                                foreach ($result_annio2 as $venta2) {
                                    $unidades_annio2 = $venta2->Unidades;
                                    $importe_annio2 = $venta2->IMPORTE;
                                }

                                foreach ($result_annio3 as $venta3) {
                                    $unidades_annio3 = $venta3->Unidades;
                                    $importe_annio3 = $venta3->IMPORTE;
                                }
                            }
                        }
                    }

                    $objeto = array(
                        "ORDEN" => $ordenacion,
                        "CLAVE" => $clave,
                        "CLIENTE" => $cliente,
                        "UNIDADES_ANNIO1" => $unidades_annio1,
                        "UNIDADES_ANNIO2" => $unidades_annio2,
                        "UNIDADES_ANNIO3" => $unidades_annio3,
                        "UNIDADES_ACTUALES" => $unidades_actual,
                        "IMPORTE_ANNIO1" => $importe_annio1,
                        "IMPORTE_ANNIO2" => $importe_annio2,
                        "IMPORTE_ANNIO3" => $importe_annio3,
                        "IMPORTE_ACTUAL" => $importe_actual
                    );
                    array_push($data, $objeto);
                }
                return $data;
            } else {
                return "ERROR1¬No se encuentra información diponible para la semana seleccionada";
            }
        } catch (Exception $err) {
            return "ERROR ¬" . $err;
        }
    }

    /**
     * Ventas anuales
     * Parametos:
     *          $request->annio,
     *          // Semana de inicio y de fin.
     *          $request->inicio
     *          $request->fin
     */
    public function ventasAnuales(Request $request)
    {
        try {
            if (isset($request->inicio) && isset($request->fin)) {
                $resultado = DB::select("SELECT AGENTE, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) as IMPORTE FROM ventas_" . $request->annio . " WHERE SEMANA BETWEEN " . $request->inicio . " AND " . $request->fin . " GROUP BY AGENTE");
                return $resultado;
            } else {
                $resultado = DB::select("SELECT AGENTE, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) as IMPORTE FROM ventas_" . $request->annio . " GROUP BY AGENTE");
                return $resultado;
            }
        } catch (Exception $ex) {
            return 'ERROR¬' . $ex;
        }
    }

    public function ventasPeriodo(Request $request)
    {
        try {
            $result = [];
            $lineaCalzado = NULL;
            $lineaAlimentos = NULL;
            $lineaAutopartes = NULL;
            $lineaElectrodomesticos = NULL;
            $lineaVariosCaja = NULL;
            $lineaVarios = NULL;
            if (isset($request->annio)) {
                if (isset($request->inicio) && isset($request->fin)) {
                    $lineaCalzado = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 1 AND SEMANA BETWEEN " . $request->inicio . " AND " . $request->fin . " GROUP BY PERIODO;");
                    $lineaAlimentos = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 2 AND SEMANA BETWEEN " . $request->inicio . " AND " . $request->fin . " GROUP BY PERIODO;");
                    $lineaAutopartes = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 3 AND SEMANA BETWEEN " . $request->inicio . " AND " . $request->fin . " GROUP BY PERIODO;");
                    $lineaElectrodomesticos = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 4 AND SEMANA BETWEEN " . $request->inicio . " AND " . $request->fin . " GROUP BY PERIODO;");
                    $lineaVariosCaja = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 5 AND SEMANA BETWEEN " . $request->inicio . " AND " . $request->fin . " GROUP BY PERIODO;");
                    $lineaVarios = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 6 AND SEMANA BETWEEN " . $request->inicio . " AND " . $request->fin . " GROUP BY PERIODO;");
                } else {
                    $lineaCalzado = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 1 GROUP BY PERIODO;");
                    $lineaAlimentos = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 2 GROUP BY PERIODO;");
                    $lineaAutopartes = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 3 GROUP BY PERIODO;");
                    $lineaElectrodomesticos = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 4 GROUP BY PERIODO;");
                    $lineaVariosCaja = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 5 GROUP BY PERIODO;");
                    $lineaVarios = DB::select("SELECT PERIODO, FORMAT(SUM(UNIDADES),0) AS UNIDADES, FORMAT(SUM(IMPORTE),2) AS IMPORTE FROM ventas_" . $request->annio . " WHERE LINEA = 6 GROUP BY PERIODO;");
                }
                array_push($result, ["Calzado" => $lineaCalzado]);
                array_push($result, ["Alimentos" => $lineaAlimentos]);
                array_push($result, ["Autopartes" => $lineaAutopartes]);
                array_push($result, ["Electrodomesticos" => $lineaElectrodomesticos]);
                array_push($result, ["Caja" => $lineaVariosCaja]);
                array_push($result, ["Varios" => $lineaVarios]);
                return $result;
            } else {
                return "Error1¬No ha seleccionado un año de consulta, compruebe!";
            }
        } catch (Exception $err) {
            return "Error¬" . $err;
        }
    }

    public function VentasSemanalesAgentes(Request $request)
    {
        try {
            if (isset($request->annio) && isset($request->semana)) {
                $dataVentas = [];
                $ventasAgente = DB::select('SELECT PRODUCTO, DESCRIPCION, CLIENTE, AGENTE, SUM(UNIDADES) AS UNIDADES FROM ventas_' . $request->annio . ' WHERE Semana = ' . $request->semana . ' and Agente LIKE "%' . strtoupper(Auth::user()->name) . '%" Group by  PRODUCTO, AGENTE');

                array_push($dataVentas, $ventasAgente);

                return $dataVentas;
            } else {
                return "Error1¬Debe seleccionar un año de consulta para desplegar información, compruebe";
            }
        } catch (Exception $err) {
            return "Error¬" . $err;
        }
    }

    public function VentasAnualesAgentes(Request $request)
    {
        try {
            if (isset($request->annio)) {
                $dataArray = [];
                if (isset($request->inicio) && isset($request->fin)) {
                    $ventasAnuales = DB::select('SELECT PRODUCTO, DESCRIPCION, CLIENTE, AGENTE, SUM(UNIDADES) AS UNIDADES FROM ventas_' . $request->annio . ' WHERE SEMANA BETWEEN '.$request->inicio.' AND '.$request->fin.' AND AGENTE LIKE "%' . Auth::user()->name . '%" GROUP BY  PRODUCTO, AGENTE;');
                    array_push($dataArray, $ventasAnuales);
                } else {
                    $ventasAnuales = DB::select('SELECT PRODUCTO, DESCRIPCION, CLIENTE, AGENTE, SUM(UNIDADES) AS UNIDADES FROM ventas_' . $request->annio . ' WHERE AGENTE LIKE "%' . Auth::user()->name . '%" GROUP BY  PRODUCTO, AGENTE;');
                    array_push($dataArray, $ventasAnuales);
                }
                return $dataArray;
            } else {
                return "Error1¬ Debe Seleccionar un año para poder consultar, compruebe!";
            }
        } catch (Exception $err) {
            return "Error¬" . $err;
        }
    }

    public function VentasPeriodoAgente(Request $request)
    {
        try {
            if (isset($request->annio)) {
                if (isset($request->inicio) && isset($request->fin)) {
                    $ventasPeriodo = DB::select('SELECT PERIODO,PRODUCTO, DESCRIPCION, CLIENTE, AGENTE,SUM(UNIDADES) AS UNIDADES FROM ventas_' . $request->annio . ' WHERE SEMANA BETWEEN ' . $request->inicio . ' AND ' . $request->fin . ' AND AGENTE = "' . Auth::user()->name . '" GROUP BY PERIODO, PRODUCTO;');
                } else {
                    $ventasPeriodo = DB::select('SELECT PERIODO,PRODUCTO, DESCRIPCION, CLIENTE, AGENTE,SUM(UNIDADES) AS UNIDADES FROM ventas_' . $request->annio . ' WHERE AGENTE = "' . Auth::user()->name . '" GROUP BY PERIODO, PRODUCTO;');
                }
            } else {
                return "Error1¬Debe seleccionar un año para la consulta, compruebe";
            }
        } catch (Exception $err) {
            return "Error¬" . $err;
        }
    }
}
