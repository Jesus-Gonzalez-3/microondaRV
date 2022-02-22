<?php

namespace App\Http\Controllers;

use App\Models\VentasReportesModel;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Expr\Cast\Array_;

class ReportesController extends Controller
{
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
    }

    public function ObtenerTop20(Request $request)
    {
        try {
            $data = [];
            $data_result = DB::select("CALL GET_TOP20_VENTAS_SEMANAL_OTRAS(" . $request->semana . ")");
            //return $data_result;
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
                    "ORDEN"=>$ordenacion,
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
        } catch (Exception $err) {
            return "ERROR ¬" . $err;
        }
    }

    public function ObtenerTop50(Request $request)
    {
        try {
            $data = [];
            $data_result = DB::select("CALL GET_TOP50_VENTAS_SEMANAL(" . $request->semana . ")");
            //return $data_result;
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
                    "ORDEN"=>$ordenacion,
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
        } catch (Exception $err) {
            return "ERROR ¬" . $err;
        }
    }
}
